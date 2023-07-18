import * as yup from 'yup';

export const blogValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  image: yup.string(),
  organization_id: yup.string().nullable(),
});
