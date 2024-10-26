'use client'
import {Modal, ModalContent, ModalBody, Button, useDisclosure} from "@nextui-org/react";
import { ReactNode } from "react";
import { LuPencil } from "react-icons/lu";

export default function UpdateLocation({children, store}: {
  children: ReactNode,
  store: string | string[] | undefined
}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  if (!store) return <div/>

  return (
    <>
      <Button onPress={onOpen} color="primary"><LuPencil size={20}/></Button>
      <Modal className="bg-blue-400" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="w-full">
          {() => (
            <>
              <ModalBody>
                {children}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}