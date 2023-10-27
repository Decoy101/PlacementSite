import { TextInput, PasswordInput } from "@/components/forms";
import { LoadingButton } from "@/components/core/LoadingButton";
import { Space } from "@mantine/core";
import strings from "@/common/strings/buttons.json";

function LoginForm() {
  const handleSubmit = async () => {
    console.log("lol");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextInput
          id="email"
          type="email"
          label="UserID/Institute Email"
          autoFocus
        />
        <Space mt="xl" />
        <PasswordInput id="password" label="Password" />
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
    </div>
  );
}

export default LoginForm;
