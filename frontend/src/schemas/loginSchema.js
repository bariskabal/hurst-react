import * as Yup from 'yup';

export const loginSchema = Yup.object({
    usernameOrEmail: Yup.string()
    .min(8, 'Kullanıcı adı veya mail en az 8 karakter olmalıdır')
    .required("Bir kullanıcı adı veya mail girin"),
    password: Yup.string()
    .min(8, 'Parola en az 8 karakter olmalıdır')
    .matches(/[A-Z]/, 'Parola en az bir büyük harf içermelidir')
    .matches(/[0-9]/, 'Parola en az bir rakam içermelidir')
    .matches(/[\W]/, 'Parola en az bir özel karakter içermelidir')
    .required('Şifrenizi girin'),
  });