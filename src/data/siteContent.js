import {
  Check,
  ClipboardCheck,
  Eye,
  Factory,
  Layers3,
  PackageCheck,
  ShieldCheck,
  Target,
  Truck,
  Warehouse,
} from 'lucide-react';

export const phoneNumbers = [
  '+251999777771',
  '+251999777772',
  '+251999777773',
];

export const navLinks = [
  { label: 'Products', href: '#products' },
   { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Mission', href: '#mission' },
  { label: 'Contact', href: '#contact' },
];

export const trustItems = [
  { icon: ShieldCheck, label: 'Quality focused' },
  { icon: Truck, label: 'Timely supply' },
  { icon: Check, label: 'Honest business' },
];

export const productStats = [
  { label: 'Specialty', value: 'Coated plywood' },
  { label: 'Also selling', value: 'Laminated plywood' },
  { label: 'Business type', value: 'Wholesaler' },
  { label: 'Location', value: 'Addis Ababa' },
];

export const productCards = [
  {
    icon: Layers3,
    title: 'Coated plywood',
    text: 'Strong plywood options designed for demanding construction use, repeated handling, and reliable project performance.',
  },
  {
    icon: PackageCheck,
    title: 'Laminated plywood',
    text: 'Clean, practical laminated boards for builders who need dependable finish quality and consistent supply.',
  },
  {
    icon: Warehouse,
    title: 'Wholesale supply',
    text: 'Bulk construction material supply for contractors, builders, and businesses across the building sector.',
  },
];

export const serviceHighlights = [
  'Premium coated plywood for demanding construction work',
  'Laminated plywood for clean, dependable building applications',
  'Wholesale supply for contractors, builders, and businesses',
];

export const processSteps = [
  'Share your project requirements, quantities, and expected delivery timeline.',
  'Select coated or laminated plywood based on your construction application.',
  'Confirm supply, pricing, and delivery support with a professional local team.',
];

export const processMetrics = [
  { icon: Warehouse, label: 'Product focus', value: 'Plywood' },
  { icon: PackageCheck, label: 'Supply type', value: 'Wholesale' },
  { icon: ClipboardCheck, label: 'Support', value: 'Project fit' },
  { icon: Factory, label: 'Industry', value: 'Construction' },
];

export const commitments = [
  {
    icon: Target,
    title: 'Mission',
    text: 'Our mission at Nu Da Trading is to provide high-quality plywood products that support safe, strong, and reliable construction. We are committed to delivering durable materials, competitive pricing, and dependable service to contractors, builders, and businesses across the construction industry.',
  },
  {
    icon: Eye,
    title: 'Vision',
    text: 'Our vision is to become one of the most trusted suppliers of construction materials in Ethiopia, recognized for quality products, strong partnerships, and consistent support to the growing construction sector.',
  },
];

export const clients = [
  'Contractors',
  'Builders',
  'Construction firms',
  'Construction businesses',
];

export const productGallery = [
  {
    title: 'Coated plywood inventory',
    category: 'Black coated plywood',
    image: 'coatedBlackWarehouse',
    description: 'Warehouse stock of coated plywood sheets ready for wholesale construction supply.',
  },
  {
    title: 'Green coated plywood',
    category: 'Coated plywood',
    image: 'greenCoatedLargeStack',
    description: 'Large stacked green coated plywood prepared for project and contractor orders.',
  },
  {
    title: 'Laminated plywood stock',
    category: 'Laminated plywood',
    image: 'orangeLaminatedCloseup',
    description: 'Close view of laminated plywood sheets showing layered strength and finish.',
  },
  {
    title: 'Loading and delivery',
    category: 'Supply support',
    image: 'loadingPlywoodTruck',
    description: 'Construction plywood being handled for delivery and active project supply.',
  },
];
