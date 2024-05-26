import * as Yup from 'yup'

export const userSchema=Yup.object({
    first:Yup.string().min(4).max(10).required('Please Enter first name'),
    last:Yup.string().min(3).max(10).required('Please enter last name'),
    email:Yup.string().email().required('Please enter Email address'),
    roll:Yup.number().required("please enter roll no.")
})