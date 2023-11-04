import { TextInput, PasswordInput } from "@/components/forms";

import { LoadingButton } from "@/components/core/LoadingButton";
import { Space, Text, Divider } from "@mantine/core";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { INewStudent } from "@/projectX-sdk";
import { validationSchema } from "../LoginForm/LoginForm.validations";
import {
  createAuthUserUsingEmailAndPassword,
  createUserDocumentFromAuth,
} from "@/firebase";
function SignUpForm() {
  const methods = useForm<INewStudent>();

  const onSignUp: SubmitHandler<INewStudent> = async (data) => {
    console.log(data);
    try {
      const user = await createAuthUserUsingEmailAndPassword(
        data.email,
        data.password
      );
      await createUserDocumentFromAuth(user!.user, { role: "student" });
    } catch (error) {
      console.log(error);
      return alert("Can't complete the user creation due to some error");
    }
  };
  return (
    <div>
      <Text>Sign Up to join the CGC</Text>
      <Divider my="xs" label="x" labelPosition="center" />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSignUp)}>
          <TextInput
            id="email"
            type="email"
            label="UserID/Institute Email"
            control={methods.control}
            required
            validations={validationSchema.email}
          />

          <PasswordInput
            id="password"
            label="Password"
            control={methods.control}
            required
          />
          <PasswordInput
            id="confirmPassword"
            label="Confirm Password"
            control={methods.control}
            required
          />

          <Space pb="sm" />
          <LoadingButton
            type="submit"
            fullWidth
            mt="lg"
            radius={"sm"}
            isLoading={false}
          >
            Sign Up
          </LoadingButton>
        </form>
      </FormProvider>
    </div>
  );
}
export default SignUpForm;
