export const siteConfig = {
  brand: {
    name: 'Skayly',
    legalName: 'Skayly Agency Inc.',
    country: 'Pakistan',
  },
  siteUrl: 'https://skayly.com',
  contact: {
    emails: [
      {
        label: 'Email',
        value: 'usdeepdev@gmail.com',
      },
    ],
    phone: '',
    offices: [
      {
        name: 'Lahore Office',
        addressLine1: 'Office No. 2, 1st Floor, UBL Bank Building, College Rd',
        addressLine2: 'Block 2 Sector C-1 Ahmed Avenue, Lahore, 54600, Pakistan',
      }
    ],
  },
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    github: 'https://github.com/usman024',
    dribbble: 'https://dribbble.com',
    stackOverflow: 'https://stackoverflow.com/users/19835527/usman-khalid',
    linkedIn: 'https://linkedin.com/company/skayly',
  },
} as const

export type SiteConfig = typeof siteConfig