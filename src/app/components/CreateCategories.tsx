"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import axios from "axios";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";

export const CreateCategory = () => {
  const [photo, setPhoto] = useState<string>("");
  const [file, setFile] = useState<File>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const a = formData.get("title-category");
      const b = formData.get("upload");
      console.log(a, b);
      const res = await axios.postForm(
        "http://127.0.0.1:3000/category/create",
        {
          title: formData.get("title-category"),
          upload: formData.get("upload"),
        }
      );
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = useState();

  const backdrops = "blur";

  const handleOpen = (backdrop: any) => {
    setBackdrop(backdrop);
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3 justify-center items-center">
        <Button
          key={backdrops}
          variant="flat"
          onPress={() => handleOpen(backdrops)}
          className="capitalize text-white bg-primary hover:bg-hover"
        >
          Crear categoria
        </Button>
      </div>

      <Modal
        backdrop={backdrop}
        isOpen={isOpen}
        onClose={onClose}
        className="w-80 h-auto"
        placement="center"
      >
        <form onSubmit={handleSubmit}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-center">
                  Crear Categoría
                </ModalHeader>
                <ModalBody className="gap-4">
                  <div className="flex flex-col gap-2">
                    <Input
                      type="text"
                      name="title-category"
                      id="title-category"
                      value={photo}
                      onChange={(e) => setPhoto(e.target.value)}
                      label="Categoría"
                      color="primary"
                      placeholder="Escribe el nombre de la categoría"
                      className="placeholder:text-green-400 text-slate-500"
                      variant="underlined"
                    />
                    <p className="text-slate-400/70 text-[0.7rem] px-1">
                      El nombre de la categoria no debe llevar simbolos
                    </p>
                  </div>
                  <div className="py-2 flex flex-col gap-2">
                    <label
                      htmlFor="upload"
                      className="text-primary text-xs font-medium"
                    >
                      Selecciona una imagen para la categoria
                    </label>
                    <label
                      htmlFor="upload"
                      className="flex w-full text-sm cursor-pointer flex-row items-center justify-center gap-2 border border-white/30 bg-primary rounded-md p-1 text-white outline-none placeholder:text-white focus:border-white"
                    >
                      {file ? (
                        <span className="text-white">{file.name}</span>
                      ) : (
                        <div className="flex flex-row items-center justify-center gap-2">
                          <span>Adjuntar archivo</span>
                        </div>
                      )}
                    </label>

                    <input
                      id="upload"
                      onChange={(e) => {
                        if (e.target.files) {
                          setFile(e.target.files[0]);
                        }
                      }}
                      type="file"
                      className="hidden w-80 bg-black text-white"
                      placeholder="John Doe"
                      name="upload"
                    />
                    <span className="text-red-500">
                      {/* {photo.file?.file.name} */}
                    </span>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="primary"
                    onPress={onClose}
                    type="submit"
                    className="rounded-lg text-white"
                  >
                    Crear
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};
