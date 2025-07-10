import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  TextField,
  Chip,
  IconButton,
  AppBar,
  Toolbar,
  ThemeProvider,
  createTheme,
  CssBaseline,
  useScrollTrigger,
  Fade,
  Tooltip,
  Link as MuiLink,
  CircularProgress,
  Stack
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  Launch,
  Download,
  Business,
  School,
  Language,
  EmojiObjects,
  Assignment,
  KeyboardArrowUp,
  Code,
  Storage,
  Cloud,
  Security,
  Build,
  Api,
  DesignServices,
  AutoAwesome,
  Terminal,
  DataObject,
  IntegrationInstructions
} from '@mui/icons-material';
import { motion, useAnimation, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './App.css';
import cv from './downloads/ButrintBytyqiCV.pdf';

// Apple-inspired professional theme
  const theme = createTheme({
    palette: {
    mode: 'light',
      primary: {
      main: '#007aff',
      light: '#5ac8fa',
      dark: '#0051d5',
      },
      secondary: {
      main: '#7e5bef',
      light: '#a855f7',
      dark: '#6d28d9',
      },
      background: {
      default: '#ffffff',
      paper: '#fbfbfd',
      },
      text: {
      primary: '#1d1d1f',
      secondary: '#86868b',
    },
    grey: {
      50: '#f9f9f9',
      100: '#f5f5f7',
      200: '#e8e8ed',
      300: '#d6d6d6',
      400: '#a1a1a6',
      500: '#86868b',
      600: '#6e6e73',
      700: '#515154',
      800: '#1d1d1f',
      900: '#000000',
      },
    },
    typography: {
    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      h1: {
        fontWeight: 700,
      fontSize: '4rem',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      },
      h2: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      },
      h3: {
        fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.875rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.6,
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.7,
      letterSpacing: '0.005em',
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
      letterSpacing: '0.005em',
      },
      button: {
        fontWeight: 500,
      textTransform: 'none',
      letterSpacing: '0.01em',
      },
    },
    shape: {
    borderRadius: 16,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
          borderRadius: 12,
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 500,
          boxShadow: 'none',
            '&:hover': {
            boxShadow: '0 4px 14px 0 rgba(0, 122, 255, 0.15)',
            },
          },
          contained: {
          background: 'linear-gradient(135deg, #007aff 0%, #5ac8fa 100%)',
            '&:hover': {
            background: 'linear-gradient(135deg, #0051d5 0%, #007aff 100%)',
            transform: 'translateY(-1px)',
            },
          },
        outlined: {
          borderColor: '#007aff',
          '&:hover': {
            backgroundColor: 'rgba(0, 122, 255, 0.04)',
            borderColor: '#007aff',
        },
      },
      },
    },
    MuiCard: {
        styleOverrides: {
          root: {
          borderRadius: 20,
          boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.05)',
          border: '1px solid rgba(0, 0, 0, 0.04)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 20px 40px 0 rgba(0, 0, 0, 0.1)',
            },
          },
        },
      },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
          backgroundColor: 'rgba(0, 122, 255, 0.08)',
          color: '#007aff',
          border: '1px solid rgba(0, 122, 255, 0.12)',
          '&:hover': {
            backgroundColor: 'rgba(0, 122, 255, 0.12)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            backgroundColor: '#f9f9f9',
            '&:hover fieldset': {
              borderColor: '#007aff',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#007aff',
            },
          },
        },
      },
    },
  },
});

// Animated section component
const AnimatedSection = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay, ease: "easeOut" }
      });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

// Tech stack data
const techStack = [
  { name: 'JavaScript', icon: <Code /> },
  { name: 'TypeScript', icon: <DataObject /> },
  { name: 'React', icon: <IntegrationInstructions /> },
  { name: 'React Native', icon: <IntegrationInstructions /> },
  { name: 'Vue.js', icon: <IntegrationInstructions /> },
  { name: 'Node.js', icon: <Terminal /> },
  { name: 'PHP', icon: <Code /> },
  { name: 'Laravel', icon: <Build /> },
  { name: 'Java', icon: <Code /> },
  { name: 'MongoDB', icon: <Storage /> },
  { name: 'MySQL', icon: <Storage /> },
  { name: 'Firebase', icon: <Cloud /> },
  { name: 'Docker', icon: <Cloud /> },
  { name: 'Kubernetes', icon: <Cloud /> },
  { name: 'Git/GitHub', icon: <GitHub /> },
  { name: 'CI/CD', icon: <Build /> },
  { name: 'n8n', icon: <AutoAwesome /> },
  { name: 'REST APIs', icon: <Api /> },
  { name: 'Figma', icon: <DesignServices /> },
  { name: 'Postman', icon: <Api /> },
];

// Languages data
const languages = [
  { name: 'Albanian', level: 'Native', flag: '🇦🇱' },
  { name: 'English', level: 'Fluent', flag: '🇬🇧' },
  { name: 'German', level: 'Intermediate', flag: '🇩🇪' },
  { name: 'French', level: 'Basic', flag: '🇫🇷' },
];

// Professional interests data
const interests = [
  { name: 'AI Agents', icon: <AutoAwesome />, description: 'Building intelligent automation systems' },
  { name: 'System Optimization', icon: <Build />, description: 'Performance tuning and scalability' },
  { name: 'Mobile Development', icon: <IntegrationInstructions />, description: 'Cross-platform mobile apps' },
  { name: 'Cloud Infrastructure', icon: <Cloud />, description: 'DevOps and cloud architecture' },
  { name: 'Cybersecurity', icon: <Security />, description: 'Web vulnerability assessment' },
  { name: 'Tech Entrepreneurship', icon: <Business />, description: 'Building scalable products' },
];

// Education data
const education = [
  {
    degree: 'Bachelor\'s Degree in Software Design',
    school: 'University of Prizren "Ukshin Hoti"',
    period: '08/2021 – 06/2024',
    location: 'Prizren, Kosovo',
    description: 'A comprehensive three-year program focused on the core principles of software engineering, system architecture, and application development. The curriculum included subjects such as algorithms and data structures, database management, web and mobile development, object-oriented programming, and software project management. Emphasis was placed on practical, hands-on learning through real-world projects, team collaboration, and problem-solving. The program equipped students with both the technical and analytical skills needed to design, build, and maintain modern software systems across various platforms.',
    thesis: '"Vulnerability and Security Assessment of Web Applications"',
    thesisDescription: 'This thesis focused on identifying and analyzing common security vulnerabilities in modern web applications, including SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF). It examined real-world case studies and demonstrated how these attacks can compromise application integrity, confidentiality, and availability. The research also evaluated various mitigation strategies, secure coding practices, and tools used for vulnerability scanning. The goal was to highlight the importance of proactive security measures in the software development lifecycle and provide practical recommendations for building more secure web applications.',
    icon: <School color="primary" />
  }
];

// Certifications data
const certifications = [
  {
    title: 'Web Development Certificate',
    organization: 'Maker Space',
    period: '01/2022 – 04/2022',
    location: 'Prizren, Kosovo',
    description: 'Hands-on training in HTML, CSS, JavaScript, Bootstrap, and React through project-based learning.',
    icon: <Assignment color="primary" />
  },
  {
    title: 'Conference Presentation Certificate – BRIDGE 2023',
    organization: '"The Future of Science: Challenges and Opportunities"',
    period: 'November 2023',
    location: 'Prizren, Kosovo',
    description: 'Presented the research paper "A Proposed System for Real-Time Face Recognition: Enhancing Access Control, Security, and Efficiency in Cross-Domain Applications" at the international BRIDGE 2023 Conference, showcasing innovation in computer vision and security.',
    icon: <EmojiObjects color="primary" />
  }
];

// Awards data
const awards = [
  {
    title: '1st Place – IDEA TO SCALE Startup Competition',
    organization: 'Innovation and Training Park (ITP)',
    period: '2024',
    location: 'Prizren, Kosovo',
    description: 'Won first place among competing early-stage startups for presenting DOA (Digital Ordering Application), a QR-based restaurant ordering platform. The competition focused on innovation, market potential, and scalability.',
    achievement: 'Led the business and product presentation, demonstrating the solution\'s ability to reduce wait times, improve operational efficiency, and digitize the ordering process for restaurants. Recognized by a jury of investors and entrepreneurs for its real-world impact, technical execution, and growth strategy.',
    icon: <AutoAwesome color="primary" />
  }
];

// Experience data
const experiences = [
  {
    title: 'Co-Founder & Executive Director',
    company: 'DOA – Digital Ordering Application',
    period: '07/2022 – Present',
    location: 'Prishtina, Kosovo',
    description: 'Leading technical strategy and development of a global contactless ordering platform. Contributed to launch and scaling in pilot restaurants across Kosovo.',
    achievements: [
      'Defined technical goals for supporting 1000+ simultaneous orders',
      'Presented product to partners, supporting early adoption and expansion',
      'Led technical development of QR-based ordering system'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Docker', 'Payment APIs'],
    icon: <Business color="primary" />
  },
  {
    title: 'Programming Trainer Intern',
    company: 'Akademia JCoders',
    period: '06/2023 – 09/2023',
    location: 'Prizren, Kosovo',
    description: 'Supervised students aged 10–16 in learning Python and Scratch through hands-on exercises.',
    achievements: [
      'Delivered engaging workshops, improving student participation and clarity',
      'Strengthened mentoring and communication skills',
      'Guided students through coding logic and problem-solving'
    ],
    technologies: ['Python', 'Scratch', 'Teaching', 'Mentoring'],
    icon: <School color="primary" />
  }
];

// Projects data
  const projects = [
    {
      id: 1,
      title: 'DOA - Digital Ordering Application',
      subtitle: 'Contactless QR-based Restaurant Ordering Platform',
      description: 'Co-founded and led technical development of a global digital ordering system for gastronomic businesses. Platform enables "Scan, Choose, Pay, Enjoy" experience, eliminating wait times and errors while providing real-time sales monitoring and menu customization for restaurants worldwide.',
      techStack: ['Vue.js', 'Laravel', 'MySQL', 'Docker', 'Payment Integration'],
      features: [
        'QR code ordering system',
        'Real-time sales monitoring', 
        'Multi-language support (EN/SQ)',
        'Custom menu management',
        'Global payment processing',
        'Role-based access control'
      ],
      role: 'Co-Founder & Executive Director',
      period: '07/2022 - Present',
      status: 'Live',
      icon: <Business />,
      color: '#007aff',
      github: 'https://github.com/butrintbytyqi/doa',
      live: 'https://appdoa.com'
    },
  {
    id: 2,
    title: 'Hajde Folim',
    subtitle: 'AI-Powered Mental Health Chatbot',
          description: 'Developed a conversational AI platform providing mental health guidance through GPT-based chat. Features user session management and admin tools for safe, effective mental health support.',
      techStack: ['JavaScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'OpenAI API'],
    features: [
      'GPT-based conversational AI',
      'User session management',
      'Admin monitoring tools',
      'Secure mental health guidance',
      'Real-time chat interface'
    ],
    role: 'Full-Stack Developer',
    period: '04/2025 - Present',
    status: 'In Development',
    icon: <EmojiObjects />,
    color: '#7e5bef',
    github: 'https://github.com/butrintbytyqi/hajde-folim',
    live: 'https://hajdefolim-1.onrender.com'
  },
  {
    id: 3,
    title: 'Ordinance App',
    subtitle: 'Desktop Prescription Management System',
    description: 'Ordinance App is a desktop application designed to manage the entire workflow of a medical ordinance. It handles patient registration, appointment scheduling, visit tracking, and report generation. The system includes separate interfaces for receptionists and doctors, enabling seamless coordination and efficient management of daily operations. It serves as a complete solution for digitizing and organizing clinical processes.Built a secure desktop application for healthcare providers. Doctors can issue and update prescriptions while pharmacies verify and fulfill them. Implemented role-based access control and secure authentication.',
    techStack: ['React', 'TypeScript', '.NET', 'SQL Server', 'Electron'],
    features: [
      'Role-based access control',
      'Secure authentication',
      'Prescription management',
      'Doctor-pharmacy workflow',
      'Desktop application'
    ],
    role: 'Full-Stack Developer',
    period: '06/2025 - Present',
    status: 'In Development',
    icon: <Security />,
    color: '#34c759',
    github: 'https://github.com/butrintbytyqi/ordinance-app'
  },
    {
    id: 4,
    title: 'Feedback App',
    subtitle: 'Real-time Feedback Collection Platform',
    description: 'Created a comprehensive feedback management system for businesses. Features customizable forms, sentiment analysis, and real-time analytics dashboards for actionable insights.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
    features: [
      'Customizable feedback forms',
      'Sentiment analysis',
      'Real-time analytics',
      'Business dashboards',
      'Data visualization'
    ],
    role: 'Full-Stack Developer',
    period: '01/2022 - Present',
    status: 'Live',
    icon: <Assignment />,
    color: '#ff9500',
    github: 'https://github.com/butrintbytyqi/feedback-app',
  },
  {
    id: 5,
    title: 'Marketplace App',
    subtitle: 'Mobile Second-Hand Trading Platform',
    description: 'A mobile marketplace application designed for users to effortlessly sell and buy second-hand items. Users can upload product photos, set prices, chat with local buyers, and arrange secure pickups. Focused on user-friendly UI, smooth navigation, and local transaction safety.',
    techStack: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Image Handling'],
    features: [
      'Product photo uploads',
      'Real-time chat system',
      'Local buyer matching',
      'Secure pickup arrangements',
      'Smooth navigation flow'
    ],
    role: 'Mobile Developer',
    period: '03/2024 - Present',
    status: 'In Development',
    icon: <Business />,
    color: '#34c759',
    github: 'https://github.com/butrintbytyqi/marketplace-app'
  },
  {
    id: 6,
    title: 'Advanced Quiz App',
    subtitle: 'Interactive Learning & Assessment Platform',
    description: 'A fully functional quiz application featuring randomized questions, timer-based challenges, scoring logic, and result analysis. Built with a focus on performance and clean UI. Ideal for test prep or gamified learning environments.',
    techStack: ['React', 'Tailwind CSS', 'API Integration', 'JavaScript', 'Responsive Design'],
    features: [
      'Dynamic quiz generation',
      'Timer-based challenges',
      'Real-time scoring system',
      'Result analysis dashboard',
      'Question bank API integration'
    ],
    role: 'Frontend Developer',
    period: '11/2023 - 02/2024',
    status: 'Completed',
    icon: <EmojiObjects />,
    color: '#7e5bef',
    github: 'https://github.com/butrintbytyqi/quiz-app',
  },
  {
    id: 7,
    title: 'StoreFlow',
    subtitle: 'Modern E-commerce Platform',
    description: 'A modern e-commerce platform developed using foundational web technologies. Includes product listings, shopping cart logic, and a responsive checkout flow. Built to demonstrate solid frontend fundamentals and real-world e-commerce structure.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage', 'Responsive Design'],
    features: [
      'Product management system',
      'Shopping cart functionality',
      'Form validation',
      'Responsive layout design',
      'Checkout flow optimization'
    ],
    role: 'Frontend Developer',
    period: '08/2023 - 10/2023',
    status: 'Completed',
    icon: <Storage />,
    color: '#007aff',
    github: 'https://github.com/butrintbytyqi/storeflow',
    
  },
  {
    id: 8,
    title: 'Personal Finance Manager',
    subtitle: 'Apple-Inspired Financial Dashboard',
    description: 'A modern, user-friendly personal finance management app designed to help users take control of their finances with clarity and ease. Features an interactive dashboard, transaction tracking, budget planning, and support for managing multiple accounts. Inspired by Apple\'s design philosophy with clean, responsive UI.',
    techStack: ['React', 'TypeScript', 'Redux Toolkit', 'Material UI', 'Recharts'],
    features: [
      'Interactive financial dashboard',
      'Expense and income tracking',
      'Budget planning & monitoring',
      'Multi-account management',
      'Real-time financial insights'
    ],
    role: 'Full-Stack Developer',
    period: '05/2024 - 08/2024',
    status: 'Completed',
    icon: <AutoAwesome />,
    color: '#ff6b6b',
    github: 'https://github.com/butrintbytyqi/finance-manager',
    
  }
];

// Scroll to top component
function ScrollToTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
        }}
      >
        <IconButton
          size="large"
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            width: 56,
            height: 56,
            boxShadow: '0 8px 32px rgba(0, 122, 255, 0.3)',
            '&:hover': {
              backgroundColor: 'primary.dark',
              transform: 'translateY(-2px)',
              boxShadow: '0 12px 40px rgba(0, 122, 255, 0.4)',
            },
          }}
        >
          <KeyboardArrowUp />
        </IconButton>
      </Box>
    </Fade>
  );
}

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  });


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Please fill out all fields'
      });
      return;
    }
    
    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: 'Sending message...'
    });
    
    // EmailJS configuration
    emailjs.init('r3gRnZ6XVat2N2Lsi');
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };
    
    emailjs.send('service_q02df5d', 'template_28odamw', templateParams)
      .then((result) => {
        setFormStatus({
          submitting: false,
          success: true,
          error: false,
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        setTimeout(() => {
          setFormStatus(prev => ({
            ...prev,
            success: false,
            message: ''
          }));
        }, 5000);
      })
      .catch((error) => {
        setFormStatus({
          submitting: false,
          success: false,
          error: true,
          message: 'Failed to send message. Please try again.'
        });
        console.error('EmailJS error:', error);
      });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
        {/* Navigation */}
      <AppBar 
        position="fixed" 
          sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
          boxShadow: 'none'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              color: 'text.primary',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '1.125rem'
            }}
                onClick={() => scrollToSection('introduction')}
          >
            Butrint Bytyqi
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {['Projects', 'Education', 'Certifications', 'Awards', 'Experience', 'Skills', 'Languages', 'Interests', 'Contact'].map((item) => (
              <Button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                sx={{ 
                  color: 'text.primary',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  padding: '8px 16px',
                  '&:hover': { 
                    color: 'primary.main',
                    backgroundColor: 'rgba(0, 122, 255, 0.04)'
                  }
                }}
              >
                {item}
              </Button>
            ))}
            </Box>
        </Toolbar>
      </AppBar>

        {/* Hero Section */}
        <Box
          id="home"
          sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Subtle background pattern */}
        <Box
          sx={{
            position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(0, 122, 255, 0.05) 0%, transparent 70%),
              radial-gradient(circle at 75% 75%, rgba(126, 91, 239, 0.05) 0%, transparent 70%)
            `,
            zIndex: 0
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Typography 
                    variant="h1"
                    sx={{ 
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  color: 'text.primary',
                      fontWeight: 700, 
                  lineHeight: 1.1
                }}
              >
                I Build Scalable Software with{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  Clean Code
                </Box>{' '}
                and{' '}
                <Box component="span" sx={{ color: 'secondary.main' }}>
                  Bold Ideas
                  </Box>
              </Typography>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 6,
                  color: 'text.secondary',
                  fontWeight: 500,
                  fontSize: { xs: '1.25rem', md: '1.5rem' }
                }}
              >
                Full-Stack Software Engineer
              </Typography>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      size="large"
                  onClick={() => scrollToSection('projects')}
                      sx={{
                    fontSize: '1.125rem',
                    padding: '16px 32px',
                    borderRadius: '16px'
                  }}
                >
                  📂 View Projects
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                  onClick={() => scrollToSection('contact')}
                      sx={{
                    fontSize: '1.125rem',
                    padding: '16px 32px',
                    borderRadius: '16px'
                  }}
                >
                  📧 Contact Me
                    </Button>
                  </Box>
                </motion.div>
          </Box>
                  </Container>
      </Box>

      {/* Introduction Section */}
      <Box id="introduction" sx={{ py: 12, backgroundColor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <AnimatedSection>
                <Typography 
                  variant="h2" 
                  sx={{ 
                    mb: 4,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    color: 'text.primary',
                    fontWeight: 700,
                    lineHeight: 1.2
                  }}
                >
                  Hi, I'm{' '}
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    Butrint Bytyqi
                  </Box>
                </Typography>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: 4,
                    color: 'text.secondary',
                    fontWeight: 500,
                    fontSize: { xs: '1.25rem', md: '1.5rem' }
                  }}
                >
                  Software Engineer | Problem Solver | Startup Builder
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 3, 
                    fontSize: '1.125rem', 
                    lineHeight: 1.8,
                    color: 'text.primary'
                  }}
                >
                  I'm a computer science graduate and software engineer passionate about building impactful, 
                  scalable applications from concept to deployment. With hands-on experience in multiple 
                  programming languages and frameworks, I focus on writing clean, efficient code and building 
                  systems that solve real-world problems.
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 3, 
                    fontSize: '1.125rem', 
                    lineHeight: 1.8,
                    color: 'text.primary'
                  }}
                >
                  My work spans everything from AI-powered tools to automation workflows and full product 
                  launches like DOA. I bring a strong understanding of system design, user-focused development, 
                  and a builder's mindset shaped by startup experience.
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 5, 
                    fontSize: '1.125rem', 
                    lineHeight: 1.8,
                    color: 'text.primary'
                  }}
                >
                  I'm always learning, always building, and constantly exploring how technology can drive 
                  meaningful impact.
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<Download />}
                    href={cv}
                    target="_blank"
                    sx={{ 
                      fontSize: '1.125rem',
                      padding: '16px 32px',
                      borderRadius: '16px'
                    }}
                  >
                    Download CV
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<LinkedIn />}
                    href="https://www.linkedin.com/in/butrint-bytyqi-37859a235/"
                    target="_blank"
                    sx={{ 
                      fontSize: '1.125rem',
                      padding: '16px 32px',
                      borderRadius: '16px'
                    }}
                  >
                    LinkedIn
                  </Button>
                </Box>
              </AnimatedSection>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <AnimatedSection delay={0.3}>
                <Card sx={{ p: 4, textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                    Quick Facts
                  </Typography>
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <LocationOn color="primary" />
                      <Box sx={{ textAlign: 'left' }}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>Location</Typography>
                        <Typography variant="body2" color="text.secondary">Prishtina, Kosovo</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Email color="primary" />
                      <Box sx={{ textAlign: 'left' }}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>Email</Typography>
                        <Typography variant="body2" color="text.secondary">butrinti022@gmail.com</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Phone color="primary" />
                      <Box sx={{ textAlign: 'left' }}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>Phone</Typography>
                        <Typography variant="body2" color="text.secondary">+383 49 153 433</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <School color="primary" />
                      <Box sx={{ textAlign: 'left' }}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>Education</Typography>
                        <Typography variant="body2" color="text.secondary">BS Software Design, UPZ</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Language color="primary" />
                      <Box sx={{ textAlign: 'left' }}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>Languages</Typography>
                        <Typography variant="body2" color="text.secondary">Albanian, English, German, French</Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Card>
              </AnimatedSection>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box id="projects" sx={{ py: 10, backgroundColor: '#f9f9f9' }}>
        <Container maxWidth="lg">
          <AnimatedSection>
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 8, 
                textAlign: 'center',
                color: 'text.primary',
                fontWeight: 700
              }}
            >
              Featured Projects
          </Typography>
          </AnimatedSection>
          
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={project.id}>
                <AnimatedSection delay={index * 0.1}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      cursor: 'pointer',
                      borderLeft: `4px solid ${project.color}`,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-12px)',
                        boxShadow: `0 25px 50px 0 ${project.color}20`,
                      }
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box
                        sx={{
                            width: 56,
                            height: 56,
                            borderRadius: 2,
                            backgroundColor: `${project.color}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 2,
                            color: project.color
                          }}
                        >
                          {project.icon}
                      </Box>
                        <Box>
                          <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 0.5 }}>
                            {project.title}
          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {project.subtitle}
                          </Typography>
              </Box>
                    </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                        <Chip
                          label={project.status}
                          size="small"
                        sx={{
                            backgroundColor: project.status === 'Live' ? '#34c759' : '#ff9500',
                            color: 'white',
                            fontWeight: 500
                          }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {project.period}
                      </Typography>
        </Box>

                      <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.6 }}>
                        {project.description}
            </Typography>
            
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="body2" sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}>
                          Key Features:
                </Typography>
                        <Stack spacing={1}>
                          {project.features.slice(0, 3).map((feature, idx) => (
                            <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                          sx={{
                                  width: 6,
                                  height: 6,
                                  borderRadius: '50%',
                                  backgroundColor: project.color,
                                  flexShrink: 0
                                }}
                              />
                              <Typography variant="body2" color="text.secondary">
                                {feature}
                          </Typography>
                        </Box>
                  ))}
                        </Stack>
              </Box>
                      
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="body2" sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}>
                          Tech Stack:
              </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {project.techStack.map((tech, techIndex) => (
                            <Chip
                              key={techIndex}
                              label={tech}
                              size="small"
                              variant="outlined"
                              sx={{ 
                                fontSize: '0.75rem',
                                backgroundColor: `${project.color}08`,
                                borderColor: `${project.color}30`,
                                color: project.color
                              }}
                            />
                          ))}
            </Box>
        </Box>

                      <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
                        {project.github && (
                  <Button 
                    size="small" 
                            startIcon={<GitHub />}
                            href={project.github}
                    target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: 'text.secondary' }}
                          >
                            Code
                  </Button>
                        )}
                        {project.live && (
                  <Button 
                    size="small" 
                            startIcon={<Launch />}
                            href={project.live}
                    target="_blank"
                            rel="noopener noreferrer"
                    variant="contained"
                    sx={{ 
                              backgroundColor: project.color,
                      '&:hover': {
                                backgroundColor: project.color,
                                filter: 'brightness(0.9)'
                      }
                    }}
                  >
                            Live Demo
                  </Button>
                        )}
                </Box>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Education Section */}
      <Box id="education" sx={{ py: 10, backgroundColor: '#f9f9f9' }}>
        <Container maxWidth="lg">
          <AnimatedSection>
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 8, 
                textAlign: 'center',
                color: 'text.primary',
                fontWeight: 700
              }}
            >
              Education
                </Typography>
          </AnimatedSection>
          
          <Grid container spacing={6} justifyContent="center">
            {education.map((edu, index) => (
              <Grid item xs={12} md={10} key={index}>
                <AnimatedSection delay={index * 0.2}>
                  <Card sx={{ p: 4, position: 'relative', overflow: 'visible' }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: 2,
                          backgroundColor: 'rgba(0, 122, 255, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        {edu.icon}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                          {edu.degree}
                </Typography>
                        <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                          {edu.school}
                </Typography>
                        <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                          {edu.period} • {edu.location}
                </Typography>
                        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                          {edu.description}
                </Typography>
                        <Box sx={{ p: 3, backgroundColor: 'rgba(0, 122, 255, 0.05)', borderRadius: 2 }}>
                          <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                            Thesis:
                </Typography>
                          <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 1 }}>
                            {edu.thesis}
                </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {edu.thesisDescription}
                </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Card>
                </AnimatedSection>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Certifications Section */}
      <Box id="certifications" sx={{ py: 10, backgroundColor: '#ffffff' }}>
        <Container maxWidth="lg">
          <AnimatedSection>
            <Typography 
              variant="h2" 
                    sx={{ 
                mb: 8, 
                textAlign: 'center',
                color: 'text.primary',
                fontWeight: 700
              }}
            >
              Certifications
                </Typography>
          </AnimatedSection>
          
          <Grid container spacing={6} justifyContent="center">
            {certifications.map((cert, index) => (
              <Grid item xs={12} md={10} key={index}>
                <AnimatedSection delay={index * 0.2}>
                  <Card sx={{ p: 4, position: 'relative', overflow: 'visible' }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                      <Box
                    sx={{ 
                          width: 56,
                          height: 56,
                          borderRadius: 2,
                          backgroundColor: 'rgba(0, 122, 255, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        {cert.icon}
                </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                          {cert.title}
                </Typography>
                        <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                          {cert.organization}
                </Typography>
                        <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                          {cert.period} • {cert.location}
                </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                          {cert.description}
          </Typography>
                      </Box>
                    </Box>
                  </Card>
                </AnimatedSection>
              </Grid>
            ))}
          </Grid>
        </Container>
          </Box>

      {/* Awards Section */}
      <Box id="awards" sx={{ py: 10, backgroundColor: '#f9f9f9' }}>
        <Container maxWidth="lg">
          <AnimatedSection>
            <Typography 
              variant="h2" 
                    sx={{
                mb: 8, 
                textAlign: 'center',
                color: 'text.primary',
                fontWeight: 700
              }}
            >
              Awards & Recognition
                      </Typography>
          </AnimatedSection>
          
          <Grid container spacing={6} justifyContent="center">
            {awards.map((award, index) => (
              <Grid item xs={12} md={10} key={index}>
                <AnimatedSection delay={index * 0.2}>
                  <Card sx={{ 
                    p: 4, 
                    position: 'relative', 
                    overflow: 'visible',
                    background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                    border: '2px solid rgba(255, 215, 0, 0.2)',
                              '&:hover': {
                      boxShadow: '0 20px 40px rgba(255, 215, 0, 0.15)',
                    }
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                      <Box
                          sx={{
                          width: 64,
                          height: 64,
                          borderRadius: 2,
                          background: 'linear-gradient(135deg, #ffd700 0%, #ffed4a 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          color: '#8b5000',
                          fontSize: '1.5rem'
                        }}
                      >
                        🏆
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h5" sx={{ mb: 1, fontWeight: 700, color: '#8b5000' }}>
                          {award.title}
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                          {award.organization}
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                          {award.period} • {award.location}
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                          {award.description}
                        </Typography>
                        <Box sx={{ p: 3, backgroundColor: 'rgba(255, 215, 0, 0.08)', borderRadius: 2, border: '1px solid rgba(255, 215, 0, 0.2)' }}>
                          <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: '#8b5000' }}>
                            Achievement Details:
                          </Typography>
                          <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                            {award.achievement}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Card>
                </AnimatedSection>
                </Grid>
              ))}
          </Grid>
        </Container>
        </Box>

      {/* Experience Section */}
      <Box id="experience" sx={{ py: 10, backgroundColor: '#f9f9f9' }}>
        <Container maxWidth="lg">
          <AnimatedSection>
            <Typography 
              variant="h2" 
                      sx={{
                mb: 8, 
                textAlign: 'center',
                color: 'text.primary',
                fontWeight: 700
              }}
            >
              Experience
            </Typography>
          </AnimatedSection>
          
          <Grid container spacing={6} justifyContent="center">
            {experiences.map((exp, index) => (
              <Grid item xs={12} md={10} key={index}>
                <AnimatedSection delay={index * 0.2}>
                  <Card sx={{ p: 4, position: 'relative', overflow: 'visible' }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                      <Box
          sx={{
                          width: 56,
                          height: 56,
                          borderRadius: 2,
                          backgroundColor: 'rgba(0, 122, 255, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        {exp.icon}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                          {exp.title}
                    </Typography>
                        <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                          {exp.company}
                    </Typography>
                        <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                          {exp.period} • {exp.location}
                          </Typography>
                        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                          {exp.description}
                          </Typography>
                        <Box sx={{ mb: 3 }}>
                          <Typography variant="body2" sx={{ fontWeight: 600, mb: 2 }}>
                            Key Achievements:
                          </Typography>
                          <Stack spacing={1}>
                            {exp.achievements.map((achievement, achIndex) => (
                              <Box key={achIndex} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                                <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'primary.main', mt: 1, flexShrink: 0 }} />
                                <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                                  {achievement}
                    </Typography>
                  </Box>
                            ))}
                          </Stack>
                        </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {exp.technologies.map((tech, techIndex) => (
                        <Chip
                              key={techIndex} 
                          label={tech}
                              size="small"
                          sx={{
                                backgroundColor: 'rgba(0, 122, 255, 0.1)',
                                color: 'primary.main',
                                fontSize: '0.75rem'
                          }}
                        />
                      ))}
                    </Box>
                      </Box>
                    </Box>
                  </Card>
                </AnimatedSection>
              </Grid>
            ))}
          </Grid>
        </Container>
                  </Box>

      {/* Skills Section */}
      <Box id="skills" sx={{ py: 10, backgroundColor: '#ffffff' }}>
        <Container maxWidth="lg">
          <AnimatedSection>
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 8, 
                textAlign: 'center',
                color: 'text.primary',
                fontWeight: 700
              }}
            >
              Technical Skills
                    </Typography>
          </AnimatedSection>
          
          <Grid container spacing={3}>
            {techStack.map((tech, index) => (
              <Grid item xs={6} sm={4} md={3} key={tech.name}>
                <AnimatedSection delay={index * 0.05}>
                  <Tooltip 
                    title={tech.name}
                    placement="top"
                  >
                    <Card 
                            sx={{
                        p: 3,
                        textAlign: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                              '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 20px 40px rgba(0, 122, 255, 0.15)',
                        }
                      }}
                    >
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: 2,
                          backgroundColor: 'rgba(0, 122, 255, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 12px',
                          color: 'primary.main'
                        }}
                      >
                        {tech.icon}
                      </Box>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {tech.name}
                      </Typography>
                    </Card>
                  </Tooltip>
                </AnimatedSection>
                        </Grid>
                      ))}
                    </Grid>
        </Container>
                  </Box>

      {/* Languages Section */}
      <Box id="languages" sx={{ py: 10, backgroundColor: '#f9f9f9' }}>
        <Container maxWidth="lg">
          <AnimatedSection>
            <Typography 
              variant="h2" 
                  sx={{
                mb: 8, 
                textAlign: 'center',
                color: 'text.primary',
                fontWeight: 700
              }}
            >
              Languages
                  </Typography>
          </AnimatedSection>
          
          <Grid container spacing={4} justifyContent="center">
            {languages.map((lang, index) => (
              <Grid item xs={12} sm={6} md={3} key={lang.name}>
                <AnimatedSection delay={index * 0.1}>
                  <Card 
                      sx={{
                      p: 3,
                      textAlign: 'center',
                      height: '100%',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0, 122, 255, 0.15)',
                        }
                      }}
                    >
                    <Typography variant="h2" sx={{ mb: 2, fontSize: '3rem' }}>
                      {lang.flag}
                      </Typography>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                      {lang.name}
                      </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {lang.level}
                    </Typography>
                  </Card>
                </AnimatedSection>
              </Grid>
            ))}
            </Grid>
          </Container>
        </Box>

      {/* Professional Interests Section */}
      <Box id="interests" sx={{ py: 10, backgroundColor: '#ffffff' }}>
            <Container maxWidth="lg">
          <AnimatedSection>
                    <Typography
                      variant="h2"
                      sx={{
                mb: 8, 
                textAlign: 'center',
                color: 'text.primary',
                fontWeight: 700
              }}
            >
              Professional Interests
                    </Typography>
          </AnimatedSection>
          
          <Grid container spacing={4}>
            {interests.map((interest, index) => (
              <Grid item xs={12} sm={6} md={4} key={interest.name}>
                <AnimatedSection delay={index * 0.1}>
                  <Card 
                        sx={{
                      p: 4,
                      height: '100%',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0, 122, 255, 0.15)',
                      }
                    }}
                  >
                    <Box
                        sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        backgroundColor: 'rgba(0, 122, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px',
                        color: 'primary.main'
                      }}
                    >
                      {interest.icon}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, textAlign: 'center' }}>
                      {interest.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center', lineHeight: 1.6 }}>
                      {interest.description}
                    </Typography>
                  </Card>
                </AnimatedSection>
                </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: 10, backgroundColor: '#f9f9f9' }}>
        <Container maxWidth="lg">
          <AnimatedSection>
            <Typography 
              variant="h2" 
                    sx={{
                mb: 8, 
                textAlign: 'center',
                color: 'text.primary',
                fontWeight: 700
              }}
            >
              Let's Work Together
                    </Typography>
          </AnimatedSection>
          
          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} md={8}>
              <AnimatedSection delay={0.2}>
                <Card sx={{ p: 6 }}>
                  <Typography variant="h5" sx={{ mb: 3, textAlign: 'center', fontWeight: 600 }}>
                    Ready to Build Something Amazing?
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', color: 'text.secondary' }}>
                    I'm always interested in discussing new opportunities, collaborations, 
                    or just having a chat about technology and innovation.
                  </Typography>
                  
                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            name="name"
                          label="Your Name"
                          variant="outlined"
                          fullWidth
                          required
                            value={formData.name}
                          onChange={handleInputChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            name="email"
                          label="Your Email"
                          type="email"
                          variant="outlined"
                          fullWidth
                          required
                            value={formData.email}
                          onChange={handleInputChange}
                        />
                      </Grid>
                    </Grid>
                    
                    <TextField
                            name="message"
                      label="Your Message"
                      multiline
                      rows={4}
                      variant="outlined"
                      fullWidth
                      required
                            value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello..."
                    />
                    
                    <Box sx={{ textAlign: 'center' }}>
                      <Button
                            type="submit"
                        variant="contained"
                        size="large"
                            disabled={formStatus.submitting}
                        startIcon={formStatus.submitting ? <CircularProgress size={20} /> : <Email />}
                        sx={{ 
                          fontSize: '1.125rem',
                          padding: '16px 32px',
                          borderRadius: '16px',
                          minWidth: '200px'
                            }}
                          >
                            {formStatus.submitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Box>
                        
                          {formStatus.message && (
                                <Typography 
                                  variant="body2" 
                                  sx={{ 
                          textAlign: 'center',
                          color: formStatus.success ? 'success.main' : 'error.main',
                          mt: 2
                                  }}
                                >
                                  {formStatus.message}
                                </Typography>
                          )}
                      </Box>
                </Card>
              </AnimatedSection>
                </Grid>
              </Grid>
          
          <AnimatedSection delay={0.4}>
            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                Or reach out directly:
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                <IconButton
                  color="primary"
                  href="mailto:butrinti022@gmail.com"
                  sx={{
                    width: 56,
                    height: 56,
                    backgroundColor: 'rgba(0, 122, 255, 0.1)',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 122, 255, 0.2)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <Email />
                </IconButton>
                <IconButton
                  color="primary"
                  href="https://www.linkedin.com/in/butrint-bytyqi-37859a235/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 56,
                    height: 56,
                    backgroundColor: 'rgba(0, 122, 255, 0.1)',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 122, 255, 0.2)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  color="primary"
                  href="https://github.com/butrintbytyqi"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 56,
                    height: 56,
                    backgroundColor: 'rgba(0, 122, 255, 0.1)',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 122, 255, 0.2)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <GitHub />
                </IconButton>
              </Box>
            </Box>
          </AnimatedSection>
            </Container>
        </Box>

      {/* Footer */}
      <Box sx={{ py: 6, backgroundColor: '#1d1d1f', color: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Butrint Bytyqi
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
                Full-Stack Software Engineer passionate about building scalable solutions 
                and innovative products that make a difference.
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.6 }}>
                © 2024 Butrint Bytyqi. Code with Precision.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                <Typography variant="body2" sx={{ mb: 2, fontWeight: 600 }}>
                  Let's Connect
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
                  <MuiLink 
                    href="mailto:butrinti022@gmail.com"
                    color="inherit" 
                    underline="hover"
                    sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}
                  >
                    Email
                  </MuiLink>
                  <MuiLink 
                    href="https://www.linkedin.com/in/butrint-bytyqi-37859a235/"
                    target="_blank" 
                    color="inherit" 
                    underline="hover"
                    sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}
                  >
                    LinkedIn
                  </MuiLink>
                  <MuiLink 
                    href="https://github.com/butrintbytyqi"
                    target="_blank" 
                    color="inherit" 
                    underline="hover"
                    sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}
                  >
                    GitHub
                  </MuiLink>
                  <MuiLink 
                    href={cv}
                    target="_blank" 
                    color="inherit" 
                    underline="hover"
                    sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}
                  >
                    CV
                  </MuiLink>
                </Box>
              </Box>
            </Grid>
          </Grid>
      </Container>
      </Box>

      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;
