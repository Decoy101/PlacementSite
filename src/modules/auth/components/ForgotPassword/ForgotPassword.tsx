import { Text, TextInput, Divider } from "@mantine/core";
import { LoadingButton } from "@/components/core/LoadingButton";
import { useState } from "react";
import { forgotPassword } from "@/firebase";
function ForgotPassword() {
  const [email, setEmail] = useState<string>();
  const onSubmit = async () => {
    await forgotPassword(email as string);
  };
  return (
    <>
      <Text>Forgot Password</Text>
      <Divider my="xs" label="x" labelPosition="center" />
      <TextInput
        label="Email Id:"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <LoadingButton fullWidth isLoading={false} mt={"lg"} onClick={onSubmit}>
        Reset Password
      </LoadingButton>
    </>
  );
}

export default ForgotPassword;
