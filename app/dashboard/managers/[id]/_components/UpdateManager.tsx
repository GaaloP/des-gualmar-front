'use client';

import { Button, Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";
import { ReactNode } from "react";
import { LuPencil } from "react-icons/lu";

export default function UpdateManager({children}: {children: ReactNode}){
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <div>
            <Button onPress={onOpen} color="primary"><LuPencil size={20}/></Button>
            <Modal className="bg-yellow-400" isOpen={isOpen} onOpenChange={onOpenChange}>
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
        </div>
    )
}