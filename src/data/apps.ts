import { AppData } from '../types';

export const apps: AppData[] = [
  // Windows 11
  {
    id: 'win11_home_pro',
    name: 'Windows 11 Home / Pro',
    category: 'Windows 11',
    description: 'Multi-edition ISO',
    officialDownloadUrl: 'https://www.microsoft.com/software-download/windows11',
    downloadUrls: {
      x64: 'https://www.microsoft.com/software-download/windows11'
    },
    version: '23H2'
  },
  {
    id: 'win11_enterprise',
    name: 'Windows 11 Enterprise',
    category: 'Windows 11',
    description: 'Enterprise Edition',
    officialDownloadUrl: 'https://www.microsoft.com/evalcenter/evaluate-windows-11-enterprise',
    downloadUrls: {
      x64: 'https://www.microsoft.com/evalcenter/evaluate-windows-11-enterprise'
    },
    version: '23H2'
  },
  {
    id: 'win11_education',
    name: 'Windows 11 Education',
    category: 'Windows 11',
    description: 'Education Edition',
    officialDownloadUrl: 'https://www.microsoft.com/software-download/windows11',
    downloadUrls: {
      x64: 'https://www.microsoft.com/software-download/windows11'
    },
    version: '23H2'
  },

  // Windows 10
  {
    id: 'win10_all_editions',
    name: 'Windows 10 [All Editions]',
    category: 'Windows 10',
    description: 'Comprehensive ISO',
    officialDownloadUrl: 'https://windowstan.com/win/windows-10/',
    version: 'Latest'
  },
  {
    id: 'win10_pro',
    name: 'Windows 10 Pro',
    category: 'Windows 10',
    description: 'Professional Edition',
    officialDownloadUrl: 'https://windowstan.com/win/windows-10/',
    version: 'Latest'
  },
  {
    id: 'win10_home',
    name: 'Windows 10 Home',
    category: 'Windows 10',
    description: 'Home Edition',
    officialDownloadUrl: 'https://windowstan.com/win/windows-10-home-iso-v1/',
    version: 'Latest'
  },
  {
    id: 'win10_enterprise',
    name: 'Windows 10 Enterprise',
    category: 'Windows 10',
    description: 'Enterprise Edition',
    officialDownloadUrl: 'https://windowstan.com/win/windows-10/',
    version: 'Latest'
  },
  {
    id: 'win10_education',
    name: 'Windows 10 Education',
    category: 'Windows 10',
    description: 'Education Edition',
    officialDownloadUrl: 'https://windowstan.com/win/windows-10/',
    version: 'Latest'
  },
  {
    id: 'win10_22h2',
    name: 'Windows 10 (version 22H2)',
    category: 'Windows 10',
    description: '2022 Update',
    officialDownloadUrl: 'https://windowstan.com/win/windows-10-iso-v22h2/',
    version: '22H2'
  },
  {
    id: 'win10_21h2',
    name: 'Windows 10 (version 21H2)',
    category: 'Windows 10',
    description: 'November 2021 Update',
    officialDownloadUrl: 'https://windowstan.com/win/windows-10-iso-v21h2/',
    version: '21H2'
  },
  {
    id: 'win10_21h1',
    name: 'Windows 10 (version 21H1)',
    category: 'Windows 10',
    description: 'May 2021 Update',
    officialDownloadUrl: 'https://windowstan.com/win/windows-10-iso-v21h1/',
    version: '21H1'
  },
  {
    id: 'win10_20h2',
    name: 'Windows 10 (version 20H2)',
    category: 'Windows 10',
    description: 'October 2020 Update',
    officialDownloadUrl: 'https://windowstan.com/win/windows-10-iso-v2004-20h2/',
    version: '20H2'
  },
  {
    id: 'win10_2004',
    name: 'Windows 10 (version 2004)',
    category: 'Windows 10',
    description: 'May 2020 Update (20H1)',
    officialDownloadUrl: 'https://windowstan.com/win/windows-10-iso-v2004-20h1/',
    version: '2004'
  },
  {
    id: 'win10_1909',
    name: 'Windows 10 (version 1909)',
    category: 'Windows 10',
    description: 'November 2019 Update',
    officialDownloadUrl: 'https://windowstan.com/win/windows-10-iso-v1909/',
    version: '1909'
  },
  {
    id: 'win10_1903',
    name: 'Windows 10 (version 1903)',
    category: 'Windows 10',
    description: 'May 2019 Update',
    officialDownloadUrl: 'https://windowstan.com/win/windows-10-iso-v1903/',
    version: '1903'
  },
  {
    id: 'win10_1809_oct',
    name: 'Windows 10 (version 1809)',
    category: 'Windows 10',
    description: 'October 2018 Update',
    officialDownloadUrl: 'https://windowstan.com/win/windows-10-iso-v1809-october-2018/',
    version: '1809'
  },
  {
    id: 'win10_1809_nov',
    name: 'Windows 10 (version 1809)',
    category: 'Windows 10',
    description: 'November 2018 Update',
    officialDownloadUrl: 'https://windowstan.com/win/windows-10-iso-v1809-nov/',
    version: '1809'
  },
  {
    id: 'win10_1803',
    name: 'Windows 10 (version 1803)',
    category: 'Windows 10',
    description: 'April 2018 Update',
    officialDownloadUrl: 'https://windowstan.com/win/windows-10-iso-version-1803-april-2018/',
    version: '1803'
  },
  {
    id: 'win10_1709',
    name: 'Windows 10 (version 1709)',
    category: 'Windows 10',
    description: 'Fall Creators Update',
    officialDownloadUrl: 'https://windowstan.com/win/windows-10-iso-version-1709-oct-2017-fall-creators-update/',
    version: '1709'
  },
  {
    id: 'win10_1703',
    name: 'Windows 10 (version 1703)',
    category: 'Windows 10',
    description: 'Creators Update',
    officialDownloadUrl: 'https://windowstan.com/win/windows-10-iso-version-1703-april-2017-creators-update/',
    version: '1703'
  },
  {
    id: 'win10_1607',
    name: 'Windows 10 (version 1607)',
    category: 'Windows 10',
    description: 'Anniversary Update',
    officialDownloadUrl: 'https://windowstan.com/win/windows-10-iso-version-1607-aug-2016-anniversary-update/',
    version: '1607'
  },
  {
    id: 'win10_1511',
    name: 'Windows 10 (version 1511)',
    category: 'Windows 10',
    description: 'November Update',
    officialDownloadUrl: 'https://windowstan.com/win/windows-10-iso-version-1511-november-2015/',
    version: '1511'
  },
  {
    id: 'win10_1507',
    name: 'Windows 10 (version 1507)',
    category: 'Windows 10',
    description: 'Initial Release (Threshold 1)',
    officialDownloadUrl: 'https://windowstan.com/win/windows-10-iso-version-1507-july-2015/',
    version: '1507'
  },
  {
    id: 'win10_ltsc',
    name: 'Windows 10 LTSC',
    category: 'Windows 10',
    description: 'Long-Term Servicing Channel',
    officialDownloadUrl: 'https://www.microsoft.com/evalcenter/evaluate-windows-10-enterprise',
    downloadUrls: {
      x64: 'https://www.microsoft.com/evalcenter/evaluate-windows-10-enterprise',
      x86: 'https://www.microsoft.com/evalcenter/evaluate-windows-10-enterprise'
    },
    version: '2021'
  },

  // Windows 8.1
  {
    id: 'win81_core_pro',
    name: 'Windows 8.1',
    category: 'Windows 8.1',
    description: 'Core/Pro Multi-edition',
    officialDownloadUrl: 'https://www.microsoft.com/software-download/windows8ISO',
    downloadUrls: {
      x64: 'https://www.microsoft.com/software-download/windows8ISO',
      x86: 'https://www.microsoft.com/software-download/windows8ISO'
    },
    version: 'Update 3'
  },
  {
    id: 'win81_enterprise',
    name: 'Windows 8.1 Enterprise',
    category: 'Windows 8.1',
    description: 'Enterprise Edition',
    officialDownloadUrl: 'https://www.microsoft.com/evalcenter/evaluate-windows-8-1-enterprise',
    downloadUrls: {
      x64: 'https://www.microsoft.com/evalcenter/evaluate-windows-8-1-enterprise',
      x86: 'https://www.microsoft.com/evalcenter/evaluate-windows-8-1-enterprise'
    },
    version: 'Update 3'
  },

  // Windows 7
  {
    id: 'win7_starter',
    name: 'Windows 7 Starter',
    category: 'Windows 7',
    description: 'Starter Edition',
    officialDownloadUrl: 'https://www.microsoft.com/en-us/software-download/windows7',
    downloadUrls: {
      x86: 'https://www.microsoft.com/en-us/software-download/windows7'
    },
    version: 'SP1'
  },
  {
    id: 'win7_home_basic',
    name: 'Windows 7 Home Basic',
    category: 'Windows 7',
    description: 'Home Basic Edition',
    officialDownloadUrl: 'https://www.microsoft.com/en-us/software-download/windows7',
    downloadUrls: {
      x64: 'https://www.microsoft.com/en-us/software-download/windows7',
      x86: 'https://www.microsoft.com/en-us/software-download/windows7'
    },
    version: 'SP1'
  },
  {
    id: 'win7_home_premium',
    name: 'Windows 7 Home Premium',
    category: 'Windows 7',
    description: 'Home Premium Edition',
    officialDownloadUrl: 'https://www.microsoft.com/en-us/software-download/windows7',
    downloadUrls: {
      x64: 'https://www.microsoft.com/en-us/software-download/windows7',
      x86: 'https://www.microsoft.com/en-us/software-download/windows7'
    },
    version: 'SP1'
  },
  {
    id: 'win7_professional',
    name: 'Windows 7 Professional',
    category: 'Windows 7',
    description: 'Professional Edition',
    officialDownloadUrl: 'https://www.microsoft.com/en-us/software-download/windows7',
    downloadUrls: {
      x64: 'https://www.microsoft.com/en-us/software-download/windows7',
      x86: 'https://www.microsoft.com/en-us/software-download/windows7'
    },
    version: 'SP1'
  },
  {
    id: 'win7_enterprise',
    name: 'Windows 7 Enterprise',
    category: 'Windows 7',
    description: 'Enterprise Edition',
    officialDownloadUrl: 'https://www.microsoft.com/en-us/software-download/windows7',
    downloadUrls: {
      x64: 'https://www.microsoft.com/en-us/software-download/windows7',
      x86: 'https://www.microsoft.com/en-us/software-download/windows7'
    },
    version: 'SP1'
  },
  {
    id: 'win7_ultimate',
    name: 'Windows 7 Ultimate',
    category: 'Windows 7',
    description: 'Ultimate Edition',
    officialDownloadUrl: 'https://www.microsoft.com/en-us/software-download/windows7',
    downloadUrls: {
      x64: 'https://www.microsoft.com/en-us/software-download/windows7',
      x86: 'https://www.microsoft.com/en-us/software-download/windows7'
    },
    version: 'SP1'
  },

  // Windows Vista
  {
    id: 'win_vista_starter',
    name: 'Windows Vista Starter',
    category: 'Windows Vista',
    description: 'Starter Edition',
    officialDownloadUrl: 'https://www.microsoft.com/',
    downloadUrls: {
      x86: 'https://www.microsoft.com/'
    },
    version: 'SP2'
  },
  {
    id: 'win_vista_home_basic',
    name: 'Windows Vista Home Basic',
    category: 'Windows Vista',
    description: 'Home Basic Edition',
    officialDownloadUrl: 'https://www.microsoft.com/',
    downloadUrls: {
      x64: 'https://www.microsoft.com/',
      x86: 'https://www.microsoft.com/'
    },
    version: 'SP2'
  },
  {
    id: 'win_vista_home_premium',
    name: 'Windows Vista Home Premium',
    category: 'Windows Vista',
    description: 'Home Premium Edition',
    officialDownloadUrl: 'https://www.microsoft.com/',
    downloadUrls: {
      x64: 'https://www.microsoft.com/',
      x86: 'https://www.microsoft.com/'
    },
    version: 'SP2'
  },
  {
    id: 'win_vista_business',
    name: 'Windows Vista Business',
    category: 'Windows Vista',
    description: 'Business Edition',
    officialDownloadUrl: 'https://www.microsoft.com/',
    downloadUrls: {
      x64: 'https://www.microsoft.com/',
      x86: 'https://www.microsoft.com/'
    },
    version: 'SP2'
  },
  {
    id: 'win_vista_enterprise',
    name: 'Windows Vista Enterprise',
    category: 'Windows Vista',
    description: 'Enterprise Edition',
    officialDownloadUrl: 'https://www.microsoft.com/',
    downloadUrls: {
      x64: 'https://www.microsoft.com/',
      x86: 'https://www.microsoft.com/'
    },
    version: 'SP2'
  },
  {
    id: 'win_vista_ultimate',
    name: 'Windows Vista Ultimate',
    category: 'Windows Vista',
    description: 'Ultimate Edition',
    officialDownloadUrl: 'https://www.microsoft.com/',
    downloadUrls: {
      x64: 'https://www.microsoft.com/',
      x86: 'https://www.microsoft.com/'
    },
    version: 'SP2'
  },

  // Windows Server Editions
  {
    id: 'win_server_2022',
    name: 'Windows Server 2022',
    category: 'Windows Server',
    description: 'Standard / Datacenter',
    officialDownloadUrl: 'https://www.microsoft.com/evalcenter/evaluate-windows-server-2022',
    downloadUrls: {
      x64: 'https://www.microsoft.com/evalcenter/evaluate-windows-server-2022'
    },
    version: 'LTSC'
  },
  {
    id: 'win_server_2019',
    name: 'Windows Server 2019',
    category: 'Windows Server',
    description: 'Standard / Datacenter',
    officialDownloadUrl: 'https://www.microsoft.com/evalcenter/evaluate-windows-server-2019',
    downloadUrls: {
      x64: 'https://www.microsoft.com/evalcenter/evaluate-windows-server-2019'
    },
    version: 'LTSC'
  },
  {
    id: 'win_server_2016',
    name: 'Windows Server 2016',
    category: 'Windows Server',
    description: 'Standard / Datacenter',
    officialDownloadUrl: 'https://www.microsoft.com/evalcenter/evaluate-windows-server-2016',
    downloadUrls: {
      x64: 'https://www.microsoft.com/evalcenter/evaluate-windows-server-2016'
    },
    version: 'LTSC'
  },
  {
    id: 'win_server_2012_r2',
    name: 'Windows Server 2012 R2',
    category: 'Windows Server',
    description: 'Standard / Datacenter',
    officialDownloadUrl: 'https://www.microsoft.com/evalcenter/evaluate-windows-server-2012-r2',
    downloadUrls: {
      x64: 'https://www.microsoft.com/evalcenter/evaluate-windows-server-2012-r2'
    },
    version: 'R2'
  },
  {
    id: 'win_server_2008_r2',
    name: 'Windows Server 2008 R2',
    category: 'Windows Server',
    description: 'Standard / Enterprise / Datacenter',
    officialDownloadUrl: 'https://www.microsoft.com/download/details.aspx?id=11093',
    downloadUrls: {
      x64: 'https://www.microsoft.com/download/details.aspx?id=11093'
    },
    version: 'SP1'
  },

  // Classic Windows (أنظمة التشغيل القديمة)
  {
    id: 'win_xp_pro_sp3',
    name: 'Windows XP Pro',
    category: 'Classic Windows',
    description: 'SP3',
    officialDownloadUrl: 'https://archive.org/details/WinXPProSP3x86',
    downloadUrls: {
      x86: 'https://archive.org/details/WinXPProSP3x86'
    },
    version: 'SP3'
  },
  {
    id: 'win_xp_home',
    name: 'Windows XP Home',
    category: 'Classic Windows',
    description: 'Home Edition x86',
    officialDownloadUrl: 'https://archive.org/details/WinXPHomeSP3',
    downloadUrls: {
      x86: 'https://archive.org/details/WinXPHomeSP3'
    },
    version: 'SP3'
  },
  {
    id: 'win_xp_x64',
    name: 'Windows XP Pro x64',
    category: 'Classic Windows',
    description: 'Professional x64 Edition',
    officialDownloadUrl: 'https://archive.org/details/WindowsXPProfessionalx64EditionSP2',
    downloadUrls: {
      x64: 'https://archive.org/details/WindowsXPProfessionalx64EditionSP2'
    },
    version: 'SP2'
  },
  {
    id: 'win_me',
    name: 'Windows ME',
    category: 'Classic Windows',
    description: 'Millennium Edition',
    officialDownloadUrl: 'https://archive.org/details/WindowsME',
    version: 'Final'
  },
  {
    id: 'win_2000',
    name: 'Windows 2000',
    category: 'Classic Windows',
    description: 'Professional / Server',
    officialDownloadUrl: 'https://archive.org/details/Windows2000ProSP4',
    version: 'SP4'
  },
  {
    id: 'win_98',
    name: 'Windows 98',
    category: 'Classic Windows',
    description: 'Second Edition (SE)',
    officialDownloadUrl: 'https://archive.org/details/Windows98SE',
    version: 'SE'
  },
  {
    id: 'win_95',
    name: 'Windows 95',
    category: 'Classic Windows',
    description: 'OSR2.5',
    officialDownloadUrl: 'https://archive.org/details/Windows95OSR25',
    version: 'OSR2.5'
  },
  {
    id: 'win_nt_4',
    name: 'Windows NT 4.0',
    category: 'Classic Windows',
    description: 'Workstation / Server',
    officialDownloadUrl: 'https://archive.org/details/WindowsNT4Workstation',
    version: 'SP6a'
  },
  {
    id: 'win_311',
    name: 'Windows 3.11',
    category: 'Classic Windows',
    description: 'For Workgroups',
    officialDownloadUrl: 'https://archive.org/details/Windows311',
    version: '3.11'
  },

  // Microsoft Office (مايكروسوفت أوفيس)
  {
    id: 'office_2024',
    name: 'Microsoft Office 2024',
    category: 'Microsoft Office',
    description: 'LTSC Professional Plus',
    officialDownloadUrl: 'https://windowstan.com/software/microsoft-office-2024/',
    version: '2024'
  },
  {
    id: 'office_2021',
    name: 'Microsoft Office 2021',
    category: 'Microsoft Office',
    description: 'Professional Plus',
    officialDownloadUrl: 'https://windowstan.com/software/microsoft-office-2021/',
    version: '2021'
  },
  {
    id: 'office_2019',
    name: 'Microsoft Office 2019',
    category: 'Microsoft Office',
    description: 'Professional Plus',
    officialDownloadUrl: 'https://windowstan.com/software/microsoft-office-2019-v1/',
    version: '2019'
  },
  {
    id: 'office_2016',
    name: 'Microsoft Office 2016',
    category: 'Microsoft Office',
    description: 'Professional Plus',
    officialDownloadUrl: 'https://windowstan.com/software/microsoft-office-2016-v1/',
    version: '2016'
  },
  {
    id: 'office_2013',
    name: 'Microsoft Office 2013',
    category: 'Microsoft Office',
    description: 'Professional Plus',
    officialDownloadUrl: 'https://windowstan.com/software/microsoft-office-2013-v1/',
    version: '2013'
  },
  {
    id: 'office_365',
    name: 'Microsoft 365',
    category: 'Microsoft Office',
    description: 'Cloud-based Suite',
    officialDownloadUrl: 'https://windowstan.com/software/microsoft-office-365-v1/',
    version: '365'
  },
  {
    id: 'office_2010',
    name: 'Microsoft Office 2010',
    category: 'Microsoft Office',
    description: 'Professional',
    officialDownloadUrl: 'https://windowstan.com/software/office-2010-v1/',
    version: '2010'
  },
  {
    id: 'office_2007',
    name: 'Microsoft Office 2007',
    category: 'Microsoft Office',
    description: 'Enterprise',
    officialDownloadUrl: 'https://windowstan.com/software/office-2007-v1/',
    version: '2007'
  },
  {
    id: 'office_2003',
    name: 'Microsoft Office 2003',
    category: 'Microsoft Office',
    description: 'Professional',
    officialDownloadUrl: 'https://windowstan.com/software/office-2003-v11/',
    version: '2003'
  },
  {
    id: 'office_xp',
    name: 'Microsoft Office XP',
    category: 'Microsoft Office',
    description: 'Professional',
    officialDownloadUrl: 'https://windowstan.com/software/office-xp-v4/',
    version: 'XP'
  },
  {
    id: 'office_2000',
    name: 'Microsoft Office 2000',
    category: 'Microsoft Office',
    description: 'Premium',
    officialDownloadUrl: 'https://windowstan.com/software/office-2000-v2/',
    version: '2000'
  },
  {
    id: 'office_97',
    name: 'Microsoft Office 97',
    category: 'Microsoft Office',
    description: 'Professional',
    officialDownloadUrl: 'https://windowstan.com/software/office-97-v1/',
    version: '97'
  },
  {
    id: 'office_95',
    name: 'Microsoft Office 95',
    category: 'Microsoft Office',
    description: 'Standard',
    officialDownloadUrl: 'https://windowstan.com/software/office-95-v1/',
    version: '95'
  },

  // Other & Utilities (Updated)
  {
    id: 'bloxstrap',
    name: 'Bloxstrap',
    category: 'Other & Utilities',
    description: 'Feature-packed Roblox bootstrapper',
    officialDownloadUrl: 'https://github.com/pizzaboxer/bloxstrap/releases/latest/download/Bloxstrap.exe',
    version: 'Latest'
  },
  {
    id: 'torrentio',
    name: 'Torrentio',
    category: 'Other & Utilities',
    description: 'Stremio Addon',
    officialDownloadUrl: 'https://torrentio.strem.fun/',
    version: 'Web'
  },

  // Imaging (Updated)
  {
    id: 'photoshop_cc_2025',
    name: 'Adobe Photoshop 2025',
    category: 'Imaging',
    description: 'Creative Cloud',
    officialDownloadUrl: 'https://www.adobe.com/products/photoshop.html',
    version: '2025'
  },
  {
    id: 'photoshop_cc_2024',
    name: 'Adobe Photoshop 2024',
    category: 'Imaging',
    description: 'Creative Cloud',
    officialDownloadUrl: 'https://www.adobe.com/products/photoshop.html',
    version: '2024'
  },

  // Antivirus (مكافحة الفيروسات)
  {
    id: 'avast_free',
    name: 'Avast Free Antivirus',
    category: 'Antivirus',
    description: 'Essential protection',
    officialDownloadUrl: 'https://windowstan.com/software/avast-free-antivirus/',
    version: 'Latest'
  },
  {
    id: 'mse',
    name: 'Microsoft Security Essentials',
    category: 'Antivirus',
    description: 'For Windows 7/Vista',
    officialDownloadUrl: 'https://windowstan.com/software/microsoft-security-essentials/',
    version: 'Latest'
  },
  {
    id: 'avira_free',
    name: 'Avira AntiVir Personal',
    category: 'Antivirus',
    description: 'Free Antivirus',
    officialDownloadUrl: 'https://windowstan.com/software/avira-antivir-personal/',
    version: 'Latest'
  },
  {
    id: 'kaspersky_free',
    name: 'Kaspersky AntiVirus',
    category: 'Antivirus',
    description: 'Cloud Free',
    officialDownloadUrl: 'https://windowstan.com/software/kaspersky-antivirus/',
    version: 'Latest'
  },
  {
    id: 'avg_ultimate',
    name: 'AVG Ultimate',
    category: 'Antivirus',
    description: 'All-in-one protection',
    officialDownloadUrl: 'https://windowstan.com/software/avg-ultimate/',
    version: 'Latest'
  },
  {
    id: 'avg_pro',
    name: 'AVG AntiVirus Pro',
    category: 'Antivirus',
    description: 'Advanced protection',
    officialDownloadUrl: 'https://windowstan.com/software/avg-antivirus-pro/',
    version: 'Latest'
  },
  {
    id: 'avg_free',
    name: 'AVG AntiVirus Free',
    category: 'Antivirus',
    description: 'Basic protection',
    officialDownloadUrl: 'https://windowstan.com/software/avg-antivirus-free/',
    version: 'Latest'
  },
  {
    id: 'malwarebytes',
    name: 'Malwarebytes',
    category: 'Antivirus',
    description: 'Anti-Malware',
    officialDownloadUrl: 'https://windowstan.com/software/malwarebytes-anti-malware/',
    version: 'Latest'
  },
  {
    id: 'mcafee_stinger',
    name: 'McAfee Labs Stinger',
    category: 'Antivirus',
    description: 'Standalone utility',
    officialDownloadUrl: 'https://windowstan.com/software/mcafee-labs-stinger/',
    version: 'Latest'
  },

  // Web Browsers (متصفحات الويب)
  {
    id: 'chrome',
    name: 'Chrome',
    category: 'Web Browsers',
    description: 'متصفح سريع من جوجل',
    officialDownloadUrl: 'https://www.google.com/chrome/',
    version: '145.0'
  },
  {
    id: 'opera',
    name: 'Opera',
    category: 'Web Browsers',
    description: 'متصفح بديل ومميز',
    officialDownloadUrl: 'https://www.opera.com/download',
    version: '127.0'
  },
  {
    id: 'firefox',
    name: 'Firefox',
    category: 'Web Browsers',
    description: 'متصفح قابل للتخصيص',
    officialDownloadUrl: 'https://www.mozilla.org/firefox/new/',
    version: '148.0'
  },
  {
    id: 'edge',
    name: 'Edge',
    category: 'Web Browsers',
    description: 'متصفح مايكروسوفت إيدج',
    officialDownloadUrl: 'https://www.microsoft.com/edge',
    version: '145.0'
  },
  {
    id: 'brave',
    name: 'Brave',
    category: 'Web Browsers',
    description: 'متصفح يركز على الخصوصية',
    officialDownloadUrl: 'https://brave.com/download/',
    version: '1.87'
  },

  // Messaging (المراسلة)
  {
    id: 'zoom',
    name: 'Zoom',
    category: 'Messaging',
    description: 'مؤتمرات الفيديو',
    officialDownloadUrl: 'https://zoom.us/download',
    version: '6.7.5'
  },
  {
    id: 'discord',
    name: 'Discord',
    category: 'Messaging',
    description: 'دردشة صوتية ونصية',
    officialDownloadUrl: 'https://discord.com/download',
    version: '1.0.9'
  },
  {
    id: 'teams',
    name: 'Teams',
    category: 'Messaging',
    description: 'مؤتمرات الفيديو من مايكروسوفت',
    officialDownloadUrl: 'https://www.microsoft.com/microsoft-teams/download-app',
    version: 'Latest'
  },
  {
    id: 'pidgin',
    name: 'Pidgin',
    category: 'Messaging',
    description: 'عميل مراسلة متعدد',
    officialDownloadUrl: 'https://www.pidgin.im/download/',
    version: '2.14'
  },
  {
    id: 'thunderbird',
    name: 'Thunderbird',
    category: 'Messaging',
    description: 'قارئ البريد الإلكتروني من موزيلا',
    officialDownloadUrl: 'https://www.thunderbird.net/',
    version: '148.0'
  },
  {
    id: 'trillian',
    name: 'Trillian',
    category: 'Messaging',
    description: 'تطبيق مراسلة فورية',
    officialDownloadUrl: 'https://trillian.im/download/',
    version: '6.6.0'
  },

  // Media (الوسائط)
  {
    id: 'itunes',
    name: 'iTunes',
    category: 'Media',
    description: 'مدير الموسيقى والوسائط',
    officialDownloadUrl: 'https://www.apple.com/itunes/',
    version: '12.13'
  },
  {
    id: 'vlc',
    name: 'VLC',
    category: 'Media',
    description: 'مشغل فيديو رائع',
    officialDownloadUrl: 'https://www.videolan.org/vlc/',
    version: '3.0.23'
  },
  {
    id: 'aimp',
    name: 'AIMP',
    category: 'Media',
    description: 'مشغل موسيقى',
    officialDownloadUrl: 'https://www.aimp.ru/',
    version: '5.40'
  },
  {
    id: 'foobar2000',
    name: 'foobar2000',
    category: 'Media',
    description: 'مشغل موسيقى خفيف',
    officialDownloadUrl: 'https://www.foobar2000.org/download',
    version: '2.25'
  },
  {
    id: 'winamp',
    name: 'Winamp',
    category: 'Media',
    description: 'مشغل موسيقى كلاسيكي',
    officialDownloadUrl: 'https://www.winamp.com/',
    version: '5.9.2'
  },
  {
    id: 'musicbee',
    name: 'MusicBee',
    category: 'Media',
    description: 'مدير ومشغل موسيقى',
    officialDownloadUrl: 'https://getmusicbee.com/downloads/',
    version: '3.6'
  },
  {
    id: 'audacity',
    name: 'Audacity',
    category: 'Media',
    description: 'محرر الصوت',
    officialDownloadUrl: 'https://www.audacityteam.org/download/',
    version: '3.7.7'
  },
  {
    id: 'klite',
    name: 'K-Lite Codecs',
    category: 'Media',
    description: 'حزمة ترميز الفيديو',
    officialDownloadUrl: 'https://codecguide.com/download_kl.htm',
    version: '19.5.0'
  },
  {
    id: 'gom',
    name: 'GOM Player',
    category: 'Media',
    description: 'مشغل فيديو',
    officialDownloadUrl: 'https://www.gomlab.com/gomplayer-media-player',
    version: '2.3.14'
  },
  {
    id: 'spotify',
    name: 'Spotify',
    category: 'Media',
    description: 'خدمة الموسيقى عبر الإنترنت',
    officialDownloadUrl: 'https://www.spotify.com/download/',
    version: '1.2.84'
  },
  {
    id: 'cccp',
    name: 'CCCP',
    category: 'Media',
    description: 'حزمة ترميز الفيديو',
    officialDownloadUrl: 'http://www.cccp-project.net/',
    version: 'Latest'
  },
  {
    id: 'mediamonkey',
    name: 'MediaMonkey',
    category: 'Media',
    description: 'منظم الموسيقى',
    officialDownloadUrl: 'https://www.mediamonkey.com/download/',
    version: '2024.1'
  },
  {
    id: 'handbrake',
    name: 'HandBrake',
    category: 'Media',
    description: 'محول الفيديو',
    officialDownloadUrl: 'https://handbrake.fr/downloads.php',
    version: '1.10.2'
  },

  // .NET & Runtimes (بيئات التشغيل و .NET)
  {
    id: 'dotnet481',
    name: '.NET 4.8.1',
    category: '.NET & Runtimes',
    description: 'Microsoft .NET Framework',
    officialDownloadUrl: 'https://dotnet.microsoft.com/download/dotnet-framework/net481',
    version: '4.8.1'
  },
  {
    id: 'dotnet8',
    name: '.NET Desktop Runtime 8',
    category: '.NET & Runtimes',
    description: 'x64, arm64, x86',
    officialDownloadUrl: 'https://dotnet.microsoft.com/download/dotnet/8.0',
    version: '8.0'
  },
  {
    id: 'dotnet9',
    name: '.NET Desktop Runtime 9',
    category: '.NET & Runtimes',
    description: 'x64, arm64, x86',
    officialDownloadUrl: 'https://dotnet.microsoft.com/download/dotnet/9.0',
    version: '9.0'
  },
  {
    id: 'dotnet10',
    name: '.NET Desktop Runtime 10',
    category: '.NET & Runtimes',
    description: 'x64, arm64, x86',
    officialDownloadUrl: 'https://dotnet.microsoft.com/download/dotnet',
    version: '10.0'
  },
  {
    id: 'aspnet8',
    name: 'ASP.NET Core Runtime 8',
    category: '.NET & Runtimes',
    description: 'x64, arm64, x86',
    officialDownloadUrl: 'https://dotnet.microsoft.com/download/dotnet/8.0',
    version: '8.0'
  },
  {
    id: 'aspnet9',
    name: 'ASP.NET Core Runtime 9',
    category: '.NET & Runtimes',
    description: 'x64, arm64, x86',
    officialDownloadUrl: 'https://dotnet.microsoft.com/download/dotnet/9.0',
    version: '9.0'
  },
  {
    id: 'aspnet10',
    name: 'ASP.NET Core Runtime 10',
    category: '.NET & Runtimes',
    description: 'x64, arm64, x86',
    officialDownloadUrl: 'https://dotnet.microsoft.com/download/dotnet',
    version: '10.0'
  },

  // Java (جافا)
  {
    id: 'java_adopt',
    name: 'Java (AdoptOpenJDK)',
    category: 'Java',
    description: '8, 11, 17, 21, 25',
    officialDownloadUrl: 'https://adoptium.net/',
    version: 'Multiple'
  },
  {
    id: 'jdk_adopt',
    name: 'JDK (AdoptOpenJDK)',
    category: 'Java',
    description: '8, 11, 17, 21, 25',
    officialDownloadUrl: 'https://adoptium.net/',
    version: 'Multiple'
  },
  {
    id: 'jdk_corretto',
    name: 'JDK (Amazon Corretto)',
    category: 'Java',
    description: '8, 11, 17, 21, 25',
    officialDownloadUrl: 'https://aws.amazon.com/corretto/',
    version: 'Multiple'
  },
  {
    id: 'jre_corretto',
    name: 'JRE (Amazon Corretto)',
    category: 'Java',
    description: 'Version 8',
    officialDownloadUrl: 'https://aws.amazon.com/corretto/',
    version: '8'
  },

  // Imaging (التصوير والتصميم)
  {
    id: 'krita',
    name: 'Krita',
    category: 'Imaging',
    description: 'برنامج الرسم الرقمي',
    officialDownloadUrl: 'https://krita.org/en/download/krita-desktop/',
    version: '5.2.15'
  },
  {
    id: 'blender',
    name: 'Blender',
    category: 'Imaging',
    description: 'جناح التصميم ثلاثي الأبعاد',
    officialDownloadUrl: 'https://www.blender.org/download/',
    version: '5.0.1'
  },
  {
    id: 'paintnet',
    name: 'Paint.NET',
    category: 'Imaging',
    description: 'محرر الصور',
    officialDownloadUrl: 'https://www.getpaint.net/download.html',
    version: '5.111'
  },
  {
    id: 'gimp',
    name: 'GIMP',
    category: 'Imaging',
    description: 'محرر الصور مفتوح المصدر',
    officialDownloadUrl: 'https://www.gimp.org/downloads/',
    version: '3.0.8'
  },
  {
    id: 'irfanview',
    name: 'IrfanView',
    category: 'Imaging',
    description: 'عارض الصور',
    officialDownloadUrl: 'https://www.irfanview.com/',
    version: '4.73'
  },
  {
    id: 'xnview',
    name: 'XnView',
    category: 'Imaging',
    description: 'عارض الصور',
    officialDownloadUrl: 'https://www.xnview.com/en/',
    version: '2.52'
  },
  {
    id: 'inkscape',
    name: 'Inkscape',
    category: 'Imaging',
    description: 'محرر الرسومات المتجهة',
    officialDownloadUrl: 'https://inkscape.org/release/',
    version: '1.4.3'
  },
  {
    id: 'faststone',
    name: 'FastStone',
    category: 'Imaging',
    description: 'عارض الصور FastStone',
    officialDownloadUrl: 'https://www.faststone.org/FSViewerDetail.htm',
    version: '8.3'
  },
  {
    id: 'greenshot',
    name: 'Greenshot',
    category: 'Imaging',
    description: 'أداة لقطة الشاشة',
    officialDownloadUrl: 'https://getgreenshot.org/downloads/',
    version: '1.3'
  },
  {
    id: 'sharex',
    name: 'ShareX',
    category: 'Imaging',
    description: 'رافع لقطات الشاشة',
    officialDownloadUrl: 'https://getsharex.com/',
    version: 'Latest'
  },

  // Documents (المستندات)
  {
    id: 'foxit',
    name: 'Foxit Reader',
    category: 'Documents',
    description: 'قارئ PDF بديل',
    officialDownloadUrl: 'https://www.foxit.com/pdf-reader/',
    version: '2025.3'
  },
  {
    id: 'libreoffice',
    name: 'LibreOffice',
    category: 'Documents',
    description: 'جناح مكتبي مجاني',
    officialDownloadUrl: 'https://www.libreoffice.org/download/download/',
    version: '26.2.0'
  },
  {
    id: 'sumatrapdf',
    name: 'SumatraPDF',
    category: 'Documents',
    description: 'قارئ PDF خفيف الوزن',
    officialDownloadUrl: 'https://www.sumatrapdfreader.org/download-free-pdf-viewer',
    version: '3.5'
  },
  {
    id: 'cutepdf',
    name: 'CutePDF',
    category: 'Documents',
    description: 'طباعة المستندات كملفات PDF',
    officialDownloadUrl: 'https://www.cutepdf.com/',
    version: '4.0'
  },
  {
    id: 'openoffice',
    name: 'OpenOffice',
    category: 'Documents',
    description: 'جناح مكتبي مجاني',
    officialDownloadUrl: 'https://www.openoffice.org/download/',
    version: '4.1.16'
  },

  // Security (الحماية والأمان)
  {
    id: 'malwarebytes',
    name: 'Malwarebytes',
    category: 'Security',
    description: 'مزيل البرامج الضارة',
    officialDownloadUrl: 'https://www.malwarebytes.com/mwb-download',
    version: '5.5.0'
  },
  {
    id: 'avast',
    name: 'Avast',
    category: 'Security',
    description: 'مضاد فيروسات مجاني',
    officialDownloadUrl: 'https://www.avast.com/en-us/index',
    version: '26.1'
  },
  {
    id: 'avg',
    name: 'AVG',
    category: 'Security',
    description: 'مضاد فيروسات مجاني',
    officialDownloadUrl: 'https://www.avg.com/en-us/free-antivirus-download',
    version: '25.12'
  },
  {
    id: 'spybot',
    name: 'Spybot 2',
    category: 'Security',
    description: 'مزيل برامج التجسس',
    officialDownloadUrl: 'https://www.safer-networking.org/download/',
    version: '2.9'
  },
  {
    id: 'avira',
    name: 'Avira',
    category: 'Security',
    description: 'مضاد فيروسات مجاني',
    officialDownloadUrl: 'https://www.avira.com/en/free-antivirus-windows',
    version: '15.0'
  },
  {
    id: 'superantispyware',
    name: 'SUPERAntiSpyware',
    category: 'Security',
    description: 'نسخة مجانية',
    officialDownloadUrl: 'https://www.superantispyware.com/download.html',
    version: '10.0'
  },

  // File Sharing & Online Storage (مشاركة الملفات والتخزين السحابي)
  {
    id: 'qbittorrent',
    name: 'qBittorrent',
    category: 'File Sharing & Online Storage',
    description: 'عميل تورنت مجاني',
    officialDownloadUrl: 'https://www.qbittorrent.org/download.php',
    version: '5.1.4'
  },
  {
    id: 'dropbox',
    name: 'Dropbox',
    category: 'File Sharing & Online Storage',
    description: 'نسخ احتياطي ومزامنة الملفات',
    officialDownloadUrl: 'https://www.dropbox.com/downloading',
    version: '242.4'
  },
  {
    id: 'googledrive',
    name: 'Google Drive',
    category: 'File Sharing & Online Storage',
    description: 'مزامنة الملفات عبر الإنترنت',
    officialDownloadUrl: 'https://www.google.com/drive/download/',
    version: '121.0'
  },
  {
    id: 'onedrive',
    name: 'OneDrive',
    category: 'File Sharing & Online Storage',
    description: 'مزامنة الملفات من مايكروسوفت',
    officialDownloadUrl: 'https://www.microsoft.com/en-us/microsoft-365/onedrive/download',
    version: '26.0'
  },
  {
    id: 'sugarsync',
    name: 'SugarSync',
    category: 'File Sharing & Online Storage',
    description: 'نسخ احتياطي ومزامنة الملفات',
    officialDownloadUrl: 'https://www.sugarsync.com/download/',
    version: '4.1.3'
  },

  // Other & Utilities (أدوات أخرى)
  {
    id: 'evernote',
    name: 'Evernote',
    category: 'Other & Utilities',
    description: 'ملاحظات عبر الإنترنت',
    officialDownloadUrl: 'https://evernote.com/download',
    version: '11.4'
  },
  {
    id: 'googleearth',
    name: 'Google Earth',
    category: 'Other & Utilities',
    description: 'أطلس عبر الإنترنت',
    officialDownloadUrl: 'https://earth.google.com/download-earth.html',
    version: '7.3'
  },
  {
    id: 'steam',
    name: 'Steam',
    category: 'Other & Utilities',
    description: 'متجر تطبيقات للألعاب',
    officialDownloadUrl: 'https://store.steampowered.com/about/',
    version: 'Latest'
  },
  {
    id: 'epicgames',
    name: 'Epic Games',
    category: 'Other & Utilities',
    description: 'متجر Epic Games',
    officialDownloadUrl: 'https://store.epicgames.com/en-US/download',
    version: 'Latest'
  },
  {
    id: 'keepass',
    name: 'KeePass 2',
    category: 'Other & Utilities',
    description: 'مدير كلمات المرور',
    officialDownloadUrl: 'https://keepass.info/download.html',
    version: '2.60'
  },
  {
    id: 'everything',
    name: 'Everything',
    category: 'Other & Utilities',
    description: 'محرك بحث الملفات المحلية',
    officialDownloadUrl: 'https://www.voidtools.com/downloads/',
    version: '1.4'
  },
  {
    id: 'nvaccess',
    name: 'NV Access',
    category: 'Other & Utilities',
    description: 'قارئ الشاشة',
    officialDownloadUrl: 'https://www.nvaccess.org/download/',
    version: '2025.3'
  },
  {
    id: 'anydesk',
    name: 'AnyDesk',
    category: 'Other & Utilities',
    description: 'سطح المكتب البعيد',
    officialDownloadUrl: 'https://anydesk.com/en/downloads',
    version: '9.6'
  },
  {
    id: 'teamviewer',
    name: 'TeamViewer 15',
    category: 'Other & Utilities',
    description: 'أداة الوصول عن بعد',
    officialDownloadUrl: 'https://www.teamviewer.com/en/download/',
    version: '15.75'
  },
  {
    id: 'imgburn',
    name: 'ImgBurn',
    category: 'Other & Utilities',
    description: 'ناسخ الأقراص',
    officialDownloadUrl: 'https://www.imgburn.com/index.php?act=download',
    version: '2.5'
  },
  {
    id: 'realvnc',
    name: 'RealVNC',
    category: 'Other & Utilities',
    description: 'الوصول عن بعد',
    officialDownloadUrl: 'https://www.realvnc.com/en/connect/download/viewer/',
    version: '7.16'
  },
  {
    id: 'tightvnc',
    name: 'TightVNC',
    category: 'Other & Utilities',
    description: 'برنامج سطح المكتب البعيد',
    officialDownloadUrl: 'https://www.tightvnc.com/download.php',
    version: '2.8'
  },
  {
    id: 'teracopy',
    name: 'TeraCopy',
    category: 'Other & Utilities',
    description: 'نسخ ملفات أفضل',
    officialDownloadUrl: 'https://www.codesector.com/teracopy',
    version: '3.17'
  },
  {
    id: 'cdburnerxp',
    name: 'CDBurnerXP',
    category: 'Other & Utilities',
    description: 'ناسخ الأقراص',
    officialDownloadUrl: 'https://cdburnerxp.se/en/download',
    version: '4.5'
  },
  {
    id: 'revo',
    name: 'Revo',
    category: 'Other & Utilities',
    description: 'مزيل التطبيقات',
    officialDownloadUrl: 'https://www.revouninstaller.com/revo-uninstaller-free-download/',
    version: '2.6'
  },
  {
    id: 'launchy',
    name: 'Launchy',
    category: 'Other & Utilities',
    description: 'مشغل مفاتيح الاختصار',
    officialDownloadUrl: 'https://www.launchy.net/',
    version: '2.5'
  },
  {
    id: 'windirstat',
    name: 'WinDirStat',
    category: 'Other & Utilities',
    description: 'إحصائيات الدليل',
    officialDownloadUrl: 'https://windirstat.net/download.html',
    version: '2.5'
  },
  {
    id: 'wiztree',
    name: 'WizTree',
    category: 'Other & Utilities',
    description: 'إحصائيات الدليل',
    officialDownloadUrl: 'https://diskanalyzer.com/download',
    version: '4.28'
  },
  {
    id: 'glary',
    name: 'Glary',
    category: 'Other & Utilities',
    description: 'أدوات النظام',
    officialDownloadUrl: 'https://www.glarysoft.com/',
    version: '6.38'
  },
  {
    id: 'infrarecorder',
    name: 'InfraRecorder',
    category: 'Other & Utilities',
    description: 'ناسخ الأقراص',
    officialDownloadUrl: 'http://infrarecorder.org/?page_id=5',
    version: '0.53'
  },
  {
    id: 'openshell',
    name: 'Open-Shell',
    category: 'Other & Utilities',
    description: 'قائمة ابدأ بنمط قديم',
    officialDownloadUrl: 'https://github.com/Open-Shell/Open-Shell-Menu/releases',
    version: '4.4'
  },
  {
    id: 'ccleaner',
    name: 'CCleaner',
    category: 'Other & Utilities',
    description: 'منظف الكمبيوتر',
    officialDownloadUrl: 'https://www.ccleaner.com/ccleaner/download',
    version: '6.39'
  },

  // Compression & VC++ (الضغط و VC++)
  {
    id: '7zip',
    name: '7-Zip',
    category: 'Compression & VC++',
    description: 'تطبيق ضغط رائع',
    officialDownloadUrl: 'https://www.7-zip.org/download.html',
    version: '26.00'
  },
  {
    id: 'peazip',
    name: 'PeaZip',
    category: 'Compression & VC++',
    description: 'أداة ضغط الملفات',
    officialDownloadUrl: 'https://peazip.github.io/',
    version: '10.9'
  },
  {
    id: 'winrar',
    name: 'WinRAR',
    category: 'Compression & VC++',
    description: 'أداة ضغط أخرى',
    officialDownloadUrl: 'https://www.rarlab.com/download.htm',
    version: '7.20'
  },
  {
    id: 'vcredist',
    name: 'VC Redist',
    category: 'Compression & VC++',
    description: '2015+, 2013, 2012, 2010, 2008, 2005',
    officialDownloadUrl: 'https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist',
    version: 'Multiple'
  },

  // Developer Tools (أدوات المطورين)
  {
    id: 'python',
    name: 'Python',
    category: 'Developer Tools',
    description: '3.14.3 و 2.7.18',
    officialDownloadUrl: 'https://www.python.org/downloads/',
    version: '3.14.3'
  },
  {
    id: 'git',
    name: 'Git',
    category: 'Developer Tools',
    description: 'نظام التحكم في الإصدار',
    officialDownloadUrl: 'https://git-scm.com/downloads',
    version: '2.53.0'
  },
  {
    id: 'filezilla',
    name: 'FileZilla',
    category: 'Developer Tools',
    description: 'عميل FTP',
    officialDownloadUrl: 'https://filezilla-project.org/download.php',
    version: '3.69'
  },
  {
    id: 'notepadpp',
    name: 'Notepad++',
    category: 'Developer Tools',
    description: 'محرر للمبرمجين',
    officialDownloadUrl: 'https://notepad-plus-plus.org/downloads/',
    version: '8.9'
  },
  {
    id: 'winscp',
    name: 'WinSCP',
    category: 'Developer Tools',
    description: 'عميل SCP',
    officialDownloadUrl: 'https://winscp.net/eng/download.php',
    version: '6.5'
  },
  {
    id: 'putty',
    name: 'PuTTY',
    category: 'Developer Tools',
    description: 'عميل SSH',
    officialDownloadUrl: 'https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html',
    version: '0.83'
  },
  {
    id: 'winmerge',
    name: 'WinMerge',
    category: 'Developer Tools',
    description: 'مقارنة ودمج الملفات',
    officialDownloadUrl: 'https://winmerge.org/downloads/',
    version: '2.16'
  },
  {
    id: 'eclipse',
    name: 'Eclipse',
    category: 'Developer Tools',
    description: 'بيئة تطوير متكاملة لجافا',
    officialDownloadUrl: 'https://www.eclipse.org/downloads/',
    version: '4.38.0'
  },
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    category: 'Developer Tools',
    description: 'محرر للمبرمجين',
    officialDownloadUrl: 'https://code.visualstudio.com/download',
    version: '1.109.5'
  },
  {
    id: 'cursor',
    name: 'Cursor',
    category: 'Developer Tools',
    description: 'محرر أكواد بالذكاء الاصطناعي',
    officialDownloadUrl: 'https://cursor.sh/',
    version: 'Latest'
  }
];
