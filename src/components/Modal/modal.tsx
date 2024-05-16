// components/Modal.tsx
import { FC, ReactNode } from "react";
import { Button, Dialog, Flex } from "@radix-ui/themes";

interface ModalProps {
  triggerText: string;
  title: string;
  description: string;
  children: ReactNode;
  onSave?: () => void;
}

const Modal: FC<ModalProps> = ({
  triggerText,
  title,
  description,
  children,
  onSave,
}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>{triggerText}</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          {description}
        </Dialog.Description>

        <Flex direction="column" gap="3">
          {children}
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close onClick={onSave}>
            <Button>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default Modal;
