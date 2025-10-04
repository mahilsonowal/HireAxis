# HireAxis - Job Hunting Platform for Assam

A comprehensive job hunting website designed specifically for the Assam region, connecting talented professionals with top employers across Northeast India.

## 🚀 Features

### For Job Seekers
- **Advanced Job Search**: Search by keywords, location, job type, and salary range
- **Smart Filtering**: Filter jobs by experience level, company size, and industry
- **Job Alerts**: Get notified about new job opportunities matching your profile
- **Detailed Job Listings**: Comprehensive job descriptions with requirements and benefits
- **Company Profiles**: Learn about potential employers before applying
- **Mobile Responsive**: Access jobs on any device

### For Employers
- **Easy Job Posting**: Post job openings in minutes
- **Candidate Management**: Browse and manage applications
- **Company Branding**: Showcase your company culture and values
- **Analytics Dashboard**: Track job posting performance
- **Local Focus**: Target candidates specifically in Assam region

### Platform Features
- **Modern UI/UX**: Clean, professional design with Material-UI
- **Fast Performance**: Optimized for speed and responsiveness
- **SEO Optimized**: Better search engine visibility
- **Secure**: Safe and secure platform for all users
- **Multi-language Support**: Support for local languages (coming soon)

## 🛠️ Technology Stack

- **Frontend**: React 19.1.1
- **UI Framework**: Material-UI (MUI) 7.3.4
- **Routing**: React Router DOM
- **Build Tool**: Vite 7.1.7
- **Styling**: CSS3 with Material-UI theming
- **Icons**: Material-UI Icons
- **Development**: ESLint for code quality

## 📁 Project Structure

```
hireaxis/
├── public/
│   ├── jobs/                 # Job-related images
│   └── vite.svg
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Hero.jsx         # Landing page hero section
│   │   ├── JobCard.jsx      # Individual job listing card
│   │   ├── JobListings.jsx  # Job listings with filters
│   │   ├── JobDetails.jsx   # Detailed job view
│   │   └── Footer.jsx       # Site footer
│   ├── pages/              # Main application pages
│   │   ├── Home.jsx        # Landing page
│   │   ├── Jobs.jsx        # Jobs listing page
│   │   ├── About.jsx       # About us page
│   │   └── Contact.jsx     # Contact page
│   ├── App.jsx             # Main application component
│   ├── App.css             # Application styles
│   ├── index.css           # Global styles
│   └── main.jsx            # Application entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hireaxis
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎨 Design Features

### Color Palette
- **Primary Blue**: #1976d2 (Material Design Blue)
- **Secondary Red**: #dc004e (Accent color)
- **Background**: #ffffff (Clean white)
- **Text**: #333333 (Dark gray for readability)
- **Accent**: #42a5f5 (Light blue for highlights)

### Typography
- **Font Family**: Roboto, Helvetica, Arial, sans-serif
- **Headings**: Bold weights (600-700)
- **Body Text**: Regular weight (400)
- **Responsive**: Scales appropriately on all devices

### Components
- **Cards**: Rounded corners (12px border-radius)
- **Buttons**: Rounded corners (8px border-radius)
- **Shadows**: Subtle elevation for depth
- **Animations**: Smooth transitions and hover effects

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Customization

### Adding New Job Categories
1. Update the job types in `JobListings.jsx`
2. Add corresponding icons and colors
3. Update filter options

### Modifying the Theme
1. Edit the theme object in `App.jsx`
2. Customize colors, typography, and component styles
3. Update CSS variables if needed

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `App.jsx`
3. Update navigation in `Header.jsx`

## 📊 Sample Data

The application includes sample job data featuring:
- **6 Sample Jobs** across different industries
- **Job Images** from the public/jobs directory
- **Realistic Company Information** for Assam region
- **Comprehensive Job Descriptions** with requirements and benefits

## 🌟 Key Features Implemented

### Home Page
- Hero section with job search
- Statistics showcase
- Featured job listings
- Company benefits
- Call-to-action sections

### Jobs Page
- Advanced search and filtering
- Job cards with detailed information
- Sort by date, salary, relevance
- Active filter display
- Load more functionality

### Job Details Page
- Complete job information
- Company details
- Application form
- Similar jobs recommendations
- Save and share functionality

### About Page
- Company mission and vision
- Team member profiles
- Company timeline
- Core values
- Impact statistics

### Contact Page
- Contact information
- Contact form
- Office location
- FAQ section
- Response time information

## 🚀 Future Enhancements

- [ ] User authentication and profiles
- [ ] Job application tracking
- [ ] Resume builder
- [ ] Company reviews and ratings
- [ ] Advanced search with AI
- [ ] Mobile app development
- [ ] Multi-language support
- [ ] Integration with social media
- [ ] Email notifications
- [ ] Analytics dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Email: info@hireaxis.com
- Phone: +91 98765 43210
- Office: Guwahati, Assam, India

---

**HireAxis** - Connecting talent with opportunity across Assam! 🎯