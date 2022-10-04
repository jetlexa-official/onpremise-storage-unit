import { Request, Response } from "express";
import multer from "multer";
import { LocalUploadFile } from "@services/Local/interfaces/index.interfaces";
export const moveFile = ({
    fileDir,
    newFileDir,
    filename
}: {
    fileDir: string,
    newFileDir: string,
    filename: string
}) => {

}