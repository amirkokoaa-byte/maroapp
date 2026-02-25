export interface AppData {
  id: string;
  name: string;
  category: string;
  description: string;
  icon?: string; // URL to icon or lucide icon name
  officialDownloadUrl: string;
  downloadUrls?: {
    // Standard architecture keys for default/single language
    x64?: string;
    x86?: string;
    arm64?: string;
    // Language-specific overrides
    languages?: {
      [langCode: string]: {
        x64?: string;
        x86?: string;
        arm64?: string;
      };
    };
  };
  version?: string;
  sha256?: string;
  silentArgs?: string; // e.g. "/S" or "/silent"
  versionApiEndpoint?: string; // Placeholder for future backend integration
}

export interface AndroidAppData {
  id: string;
  name: string;
  developer: string;
  category: 'Social Media' | 'Utilities' | 'Productivity' | 'Media & Video' | 'Games';
  externalUrl: string;
  icon?: string;
  description?: string;
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
