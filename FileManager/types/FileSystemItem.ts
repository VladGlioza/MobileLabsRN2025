export interface FileSystemItem {
  name: string;
  uri: string;
  isDirectory: boolean;
  size?: number;
  modificationTime?: number;
}