import { TextInput, PasswordInput } from "@/components/forms";
import { LoadingButton } from "@/components/core/LoadingButton";
import { Space, Text, Divider } from "@mantine/core";
import strings from "@/common/strings/buttons.json";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { IAccount } from "@/projectX-sdk";
import { validationSchema } from "./LoginForm.validations";
import { signInAuthUserWithEmailAndPassword } from "@/firebase";
import { useNavigate } from "react-router-dom";
function LoginForm() {
  const methods = useForm<IAccount>();
  const navigate = useNavigate();
  const onLogIn: SubmitHandler<IAccount> = async (data) => {
    try {
      await signInAuthUserWithEmailAndPassword(data.email, data.password);
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-login-credentials":
          alert("Invalid login credentials");
          break;
        case "auth/wrong-password":
          alert("The password is wrong for the given email ID");
          break;
        case "auth/no-user-found":
          alert("No user found with these credentials");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div>
      <Text>Welcome to the Placement Portal</Text>
      <Divider my="xs" label="x" labelPosition="center" />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onLogIn)}>
          <TextInput
            id="email"
            type="email"
            label="UserID/Institute Email"
            control={methods.control}
            validations={validationSchema.email}
          />
          <Space mt="xl" />
          <PasswordInput
            id="password"
            label="Password"
            control={methods.control}
            required
          />
          <Space pb="sm" />
          <LoadingButton
            type="submit"
            fullWidth
            mt="lg"
            radius="sm"
            isLoading={false}
          >
            {strings.signIn}
          </LoadingButton>
        </form>
      </FormProvider>
    </div>
  );
}

export default LoginForm;
