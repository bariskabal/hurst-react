import * as Yup from 'yup';

export const registerSchema = Yup.object({
    username: Yup.string()
    .min(8, 'Kullanıcı adı en az 8 karakter olmalıdır')
    .required("Bir kullanıcı adı girin"),
    name: Yup.string()
    .min(3, 'İsminiz en az 3 karakter olmalıdır')
    .required("İsminizi girin"),
    surname: Yup.string()
    .min(3, 'Soyisminiz adı en az 3 karakter olmalıdır')
    .required("Soyisminizi girin"),
    email: Yup.string().email()
    .min(8, 'Email en az 8 karakter olmalıdır')
    .required("Email girin"),
    password: Yup.string()
    .min(8, 'Parola en az 8 karakter olmalıdır')
    .matches(/[A-Z]/, 'Parola en az bir büyük harf içermelidir')
    .matches(/[0-9]/, 'Parola en az bir rakam içermelidir')
    .matches(/[\W]/, 'Parola en az bir özel karakter içermelidir')
    .required('Şifrenizi girin'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  });