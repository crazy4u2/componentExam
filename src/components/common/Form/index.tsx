import React from 'react';
import {
  SubmitErrorHandler,
  SubmitHandler,
  UnpackNestedValue,
  useForm,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form';

interface Props<FormValues> extends UseFormProps {
  id?: string;
  onSubmit?: SubmitHandler<FormValues>;
  onError?: SubmitErrorHandler<FormValues>;
  children: (methods: UseFormReturn<FormValues>) => React.ReactNode;
  defaultValues?: UnpackNestedValue<FormValues>;
}

function Form<FormValues extends Record<string, any> = Record<string, any>>({
  id,
  onSubmit,
  onError,
  children,
  defaultValues,
}: Props<FormValues>) {
  const methods = useForm<FormValues>({
    mode: 'onChange',
    ...(defaultValues && defaultValues),
  });
  return (
    <form id={id} onSubmit={onSubmit && methods.handleSubmit(onSubmit, onError)}>
      {children(methods)}
    </form>
  );
}

export default Form;
