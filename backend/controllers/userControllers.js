import User from '../models/user.js'

const registerUser = async (req, res, next) => {
  try {
    const { username, name, email, password, gender, mainAddress, phone } =
      req.body

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' })
    }

    const newUser = new User({
      username,
      name,
      email,
      password,
      gender,
      mainAddress,
      phone,
    })

    await newUser.save()
    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      name: newUser.name,
      email: newUser.email,
      gender: newUser.gender,
      mainAddress: newUser.mainAddress,
      phone: newUser.phone,
      admin: newUser.admin,
      token: newUser.createJWT(),
    })
  } catch (error) {
    next(error)
  }
}
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json('Please provide email and password')
    }
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(403).json('Invalid Credentials')
    }
    // compare password
    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect) {
      return res.status(403).json('Invalid Credentials')
    }
    return res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      admin: user.admin,
      token: await user.createJWT(),
    })
  } catch (error) {
    next(error)
  }
}
const getAllUsers = async (req, res, next) => {
  try {
    const filter = req.query.keywords
    let where = {}

    if (filter) {
      where.$or = [
        { email: { $regex: filter, $options: 'i' } },
        { name: { $regex: filter, $options: 'i' } },
      ]
    }

    let query = User.find(where)

    const page = parseInt(req.query.page) || 1 // current page number
    const pageSize = parseInt(req.query.limit) || 10 // users per page
    const skip = (page - 1) * pageSize // documents to skip
    const total = await User.find(where).countDocuments() // total users
    const pages = Math.ceil(total / pageSize) // total page number

    // Set response headers
    res.header({
      'x-filter': filter,
      'x-totalcount': JSON.stringify(total),
      'x-currentpage': JSON.stringify(page),
      'x-pagesize': JSON.stringify(pageSize),
      'x-totalpagecount': JSON.stringify(pages),
    })

    // If the requested page exceeds the total number of pages, return empty array
    if (page > pages) {
      return res.json([])
    }

    // Retrieve users with pagination, sorting by updatedAt
    const result = await query
      .skip(skip)
      .limit(pageSize)
      .sort({ updatedAt: 'desc' })

    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
}
const getUser = async (req, res, next) => {
  try {
    const userId = req.user._id
    const user = await User.findById(userId)

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.status(200).json({
      _id: user._id,
      username: user.username,
      name: user.name,
      email: user.email,
      gender: user.gender,
      mainAddress: user.mainAddress,
      phone: user.phone,
      admin: user.admin,
    })
  } catch (error) {
    next(error)
  }
}
const updateUser = async (req, res, next) => {
  try {
    const userIdToUpdate = req.params.id
    let userId = req.user._id

    // admins have full control, and each user can update their own profile
    if (!req.user.admin && userId != userIdToUpdate) {
      return res.status(403).json('Forbidden resource')
    }

    const { name, email, password, gender, phone } = req.body

    let user = await User.findById(userIdToUpdate)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    user.name = name || user.name
    user.email = email || user.email
    if (password) {
      user.password = password
    }
    user.gender = gender || user.gender
    user.phone = phone || user.phone

    await user.save()

    const token = user.createJWT()

    res.status(200).json({
      _id: user._id,
      username: user.username,
      name: user.name,
      email: user.email,
      gender: user.gender,
      phone: user.phone,
      admin: user.admin,
      token,
    })
  } catch (error) {
    next(error)
  }
}
const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) {
      return res.status(404).json('user not found')
    }
    const deletedUser = await User.findByIdAndDelete(user._id)

    return res.status(200).json({ message: 'user deleted successfully' })
  } catch (error) {
    next(error)
  }
}

export { registerUser, loginUser, getAllUsers, getUser, updateUser, deleteUser }
