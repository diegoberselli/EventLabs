import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  theme,
} from "@chakra-ui/react";
import { FaExclamation } from "react-icons/fa";

interface ModalErrorProps {
  isOpen: boolean;
  onClose: () => void;
  error:string
}

export const ModalError = ({ isOpen, onClose, error }: ModalErrorProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color="gray.800">
          <ModalHeader display="flex">
            <Center bg="red.600" w="30px" h="30px" borderRadius="5px">
              <FaExclamation color={theme.colors.white} />
            </Center>
            <Text fontWeight="bold" ml={2}>
              {" "}
              Oops!
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Ocorreu algum erro! <b> {error}</b></Text>
          </ModalBody>

          <ModalFooter>
            <Button
              bg="red.600"
              color="white"
              w="100%"
              h="60px"
              _hover={{ bg: "red.700" }}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
