import { Center, OmitCommonProps, theme } from "@chakra-ui/react";
import { MouseEventHandler } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

interface GoBackButtonProps {
  top: string;
  left: string;
  onClick: MouseEventHandler<HTMLDivElement> & MouseEventHandler<HTMLButtonElement>
  height: string[]
}

export const GoBackButton = ({ top, left, onClick, height}: GoBackButtonProps) => {
  return (
    <Center
      as="button"
      position="absolute"
      top={top}
      left={left}
      width={["60px", "80px"]}
      height={height}
      backgroundColor="purple.700"
      fontSize="2xl"
      borderRadius="md"
      _hover={{ background: "purple" }}
      onClick={onClick}
    >
      <FaRegArrowAltCircleLeft color={theme.colors.white} />
    </Center>
  );
};
