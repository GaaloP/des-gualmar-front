'use client';

import { Button, Image, Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";
import { ReactNode } from "react";
import { LuUser } from "react-icons/lu";

export default function CreateUser({children}: {children: ReactNode}){
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <div>
            <Button onPress={onOpen}><LuUser size={20}/></Button>
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
        </div>
    )
}