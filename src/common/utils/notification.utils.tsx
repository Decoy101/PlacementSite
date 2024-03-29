import { notifications } from "@mantine/notifications";

import { NotificationToaster } from "@/components/feedback";
import { NotificationToasterType } from "@/components/feedback/NotificationToaster/NotificationToaster.types";

function showNotification(
  id: string,
  type: NotificationToasterType,
  message: string
) {
  notifications.show({
    id,
    message: (
      <NotificationToaster
        type={type}
        message={message}
        rightContent={{
          action: () => {
            notifications.hide(id);
          },
        }}
      />
    ),
  });
}

export default showNotification;
