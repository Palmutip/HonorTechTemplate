# Honor Tech LLC - Website

Custom software development company website built with React, TypeScript, UI Shadcn and Tailwind CSS.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/             # Static assets (images, styles)
├── components/         # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   └── layout/         # Layout components
├── pages/              # Page components
├── providers/          # React context providers
├── routes/             # Routing configuration
└── utils/              # Utility functions
```

## 🛠️ Build & Deploy

### Local Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Production Deployment

#### Apache Server
The project includes a `.htaccess` file that configures Apache to handle React Router routes correctly. Simply upload the contents of the `dist/` folder to your Apache server.

#### Netlify
The project includes a `_redirects` file for Netlify deployment. Upload the contents of the `dist/` folder to Netlify.

#### IIS Server
The project includes a `web.config` file for IIS deployment. Upload the contents of the `dist/` folder to your IIS server.

#### Vercel
Deploy directly from GitHub or upload the contents of the `dist/` folder.

### Important Notes

1. **SPA Routing**: This is a Single Page Application (SPA) that uses React Router for client-side routing.

2. **Server Configuration**: The included configuration files (`.htaccess`, `web.config`, `_redirects`) ensure that all routes are redirected to `index.html`, allowing React Router to handle the routing.

3. **Meta Tags**: Each page dynamically updates its title and meta description using the `setPageMeta` utility function.

4. **Build Optimization**: The build process splits the code into chunks for better performance:
   - `vendor.js` - React and React DOM
   - `router.js` - React Router
   - `ui.js` - UI libraries (Framer Motion, Lucide React)
   - `index.js` - Application code

## 🎨 Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn/ui** - UI component library
- **React Router** - Client-side routing
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Vite** - Build tool

## 📱 Features

- ✅ Responsive design
- ✅ SEO optimized with dynamic meta tags
- ✅ Smooth animations
- ✅ Modern UI components with Shadcn/ui
- ✅ TypeScript for type safety
- ✅ Optimized build for production
- ✅ Consistent design system

## 🔧 Configuration Files

- `.htaccess` - Apache server configuration
- `web.config` - IIS server configuration  
- `_redirects` - Netlify configuration
- `components.json` - Shadcn/ui configuration
- `postcss.config.js` - PostCSS configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `vite.config.ts` - Vite build configuration

## 🎨 Shadcn/ui Components Used

- **Button** - Interactive buttons with variants
- **Card** - Content containers with headers and content areas
- **Input** - Form input fields
- **Textarea** - Multi-line text input
- **Select** - Dropdown selection component
- **Label** - Form field labels
- **Badge** - Small status indicators
- **Popover** - Floating content containers
- **Navigation Menu** - Navigation components

## 📄 Pages

- **Home** - Landing page with hero section and services overview
- **About** - Company information and values
- **Services** - Detailed service offerings
- **AI** - AI and machine learning solutions
- **Testimonials** - Client testimonials and success stories
- **Referrals** - Referral program information
- **Contact** - Contact form and company information

## 🚀 Deployment Checklist

Before deploying to production:

1. ✅ Run `npm run build` to generate production build
2. ✅ Test the build locally with `npm run preview`
3. ✅ Verify all routes work correctly
4. ✅ Check that meta tags are updating properly
5. ✅ Ensure all assets are loading correctly
6. ✅ Upload the contents of `dist/` folder to your server
7. ✅ Configure your server to use the appropriate configuration file

## 📞 Support

For questions or support, contact Honor Tech LLC.
