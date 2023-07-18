import * as yup from 'yup';

export const adValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  keywords: yup.string().required(),
  blog_id: yup.string().nullable(),
});
