import AppLayout from 'layout/app-layout';
import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberInput,
} from '@chakra-ui/react';
import { useFormik, FormikHelpers } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import { FiEdit3 } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { createAd } from 'apiSdk/ads';
import { Error } from 'components/error';
import { adValidationSchema } from 'validationSchema/ads';
import { AsyncSelect } from 'components/async-select';
import { ArrayFormField } from 'components/array-form-field';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { BlogInterface } from 'interfaces/blog';
import { getBlogs } from 'apiSdk/blogs';
import { AdInterface } from 'interfaces/ad';

function AdCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: AdInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createAd(values);
      resetForm();
      router.push('/ads');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<AdInterface>({
    initialValues: {
      title: '',
      content: '',
      keywords: '',
      blog_id: (router.query.blog_id as string) ?? null,
    },
    validationSchema: adValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout>
      <Box bg="white" p={4} rounded="md" shadow="md">
        <Box mb={4}>
          <Text as="h1" fontSize="2xl" fontWeight="bold">
            Create Ad
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <form onSubmit={formik.handleSubmit}>
          <FormControl id="title" mb="4" isInvalid={!!formik.errors?.title}>
            <FormLabel>Title</FormLabel>
            <Input type="text" name="title" value={formik.values?.title} onChange={formik.handleChange} />
            {formik.errors.title && <FormErrorMessage>{formik.errors?.title}</FormErrorMessage>}
          </FormControl>
          <FormControl id="content" mb="4" isInvalid={!!formik.errors?.content}>
            <FormLabel>Content</FormLabel>
            <Input type="text" name="content" value={formik.values?.content} onChange={formik.handleChange} />
            {formik.errors.content && <FormErrorMessage>{formik.errors?.content}</FormErrorMessage>}
          </FormControl>
          <FormControl id="keywords" mb="4" isInvalid={!!formik.errors?.keywords}>
            <FormLabel>Keywords</FormLabel>
            <Input type="text" name="keywords" value={formik.values?.keywords} onChange={formik.handleChange} />
            {formik.errors.keywords && <FormErrorMessage>{formik.errors?.keywords}</FormErrorMessage>}
          </FormControl>
          <AsyncSelect<BlogInterface>
            formik={formik}
            name={'blog_id'}
            label={'Select Blog'}
            placeholder={'Select Blog'}
            fetcher={getBlogs}
            renderOption={(record) => (
              <option key={record.id} value={record.id}>
                {record?.title}
              </option>
            )}
          />
          <Button isDisabled={formik?.isSubmitting} colorScheme="blue" type="submit" mr="4">
            Submit
          </Button>
        </form>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'ad',
    operation: AccessOperationEnum.CREATE,
  }),
)(AdCreatePage);
