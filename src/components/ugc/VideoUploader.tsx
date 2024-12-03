import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { Upload, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../config/firebase';
import { v4 as uuidv4 } from 'uuid';

interface VideoUploaderProps {
  onUploadComplete: (url: string) => void;
  onError: (error: string) => void;
}

export function VideoUploader({ onUploadComplete, onError }: VideoUploaderProps) {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    if (!file.type.includes('video/')) {
      onError('Please upload a video file');
      return;
    }

    if (file.size > 100 * 1024 * 1024) {
      onError('Video must be less than 100MB');
      return;
    }

    setIsUploading(true);
    setUploadError(null);

    const fileId = uuidv4();
    const fileExtension = file.name.split('.').pop();
    const fileName = `videos/${fileId}.${fileExtension}`;
    const storageRef = ref(storage, fileName);

    try {
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          setUploadError('Failed to upload video. Please try again.');
          setIsUploading(false);
          onError(error.message);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          onUploadComplete(downloadURL);
          setIsUploading(false);
        }
      );
    } catch (error) {
      setUploadError('Failed to upload video. Please try again.');
      setIsUploading(false);
      onError(error instanceof Error ? error.message : 'Unknown error occurred');
    }
  }, [onUploadComplete, onError]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'video/*': ['.mp4', '.mov', '.avi', '.webm']
    },
    maxFiles: 1,
    disabled: isUploading
  });

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={`
          relative border-2 border-dashed rounded-xl p-8
          flex flex-col items-center justify-center text-center
          transition-colors duration-300 cursor-pointer
          ${isDragActive ? 'border-red-500 bg-red-500/10' : 'border-white/30 hover:border-red-500/50'}
          ${isUploading ? 'pointer-events-none' : ''}
        `}
      >
        <input {...getInputProps()} />

        {isUploading ? (
          <div className="space-y-4">
            <Loader className="w-8 h-8 text-red-500 animate-spin mx-auto" />
            <div>
              <p className="text-white font-medium">Uploading video...</p>
              <p className="text-white/70 text-sm">{Math.round(uploadProgress)}%</p>
            </div>
          </div>
        ) : uploadError ? (
          <div className="space-y-2 text-red-500">
            <AlertCircle className="w-8 h-8 mx-auto" />
            <p>{uploadError}</p>
          </div>
        ) : isDragActive ? (
          <div className="space-y-2">
            <Upload className="w-8 h-8 text-red-500 mx-auto" />
            <p className="text-white">Drop your video here!</p>
          </div>
        ) : uploadProgress === 100 ? (
          <div className="space-y-2">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto" />
            <p className="text-white">Upload complete!</p>
          </div>
        ) : (
          <div className="space-y-2">
            <Upload className="w-8 h-8 text-white/70 mx-auto" />
            <div>
              <p className="text-white font-medium">
                Drag and drop your video here or click to browse
              </p>
              <p className="text-white/70 text-sm mt-1">
                Maximum file size: 100MB
              </p>
            </div>
          </div>
        )}
      </div>

      {uploadProgress > 0 && uploadProgress < 100 && (
        <div className="mt-4">
          <div className="w-full bg-white/10 rounded-full h-2">
            <div
              className="bg-red-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}