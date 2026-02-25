export interface AppData {
  id: string;
  name: string;
  category: string;
  description: string;
  icon?: string; // URL to icon or lucide icon name
  officialDownloadUrl: string;
  downloadUrls?: {
    x64?: string;
    x86?: string;
    arm64?: string;
  };
  version?: string;
}

export type Category = 
  | "Windows 11"
  | "Windows 10"
  | "Windows 8.1"
  | "Windows 7"
  | "Windows Vista"
  | "Windows Server"
  | "Classic Windows"
  | "Microsoft Office"
  | "Web Browsers"
  | "Messaging"
  | "Media"
  | ".NET & Runtimes"
  | "Java"
  | "Imaging"
  | "Documents"
  | "Security"
  | "Antivirus"
  | "File Sharing & Online Storage"
  | "Other & Utilities"
  | "Compression & VC++"
  | "Developer Tools";
