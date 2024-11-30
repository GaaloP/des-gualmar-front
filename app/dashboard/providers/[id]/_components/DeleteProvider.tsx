'use client';

import { Button, Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";
import { ReactNode } from "react";
import { LuTrash } from "react-icons/lu";

export default function DeleteProvider({children}: {children: ReactNode}){
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <div>
            <Button onPress={onOpen} color="danger"><LuTrash size={20}/></Button>
            <Modal className="bg-blue-400" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent className="w-full">
                    {(onClose) => (
                        <>
                            <ModalBody>
                                {children}
                                <Button onPress={onClose}>Cancelar</Button>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}