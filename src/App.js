import { useState, useCallback } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  Link,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
  Chip,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  CssBaseline,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  LinearProgress,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import GitHubIcon from "@mui/icons-material/GitHub";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Security';
import LaunchIcon from '@mui/icons-material/Launch';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip as ChartTooltip,
  Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import "react-vertical-timeline-component/style.min.css";
import "./App.css";
import cv from "./downloads/ButrintBytyqiCV.pdf";

// Import components
import CodeDivider from "./components/CodeDivider";
import CodeRainAnimation from "./components/CodeRainAnimation";
import CodeTypingAnimation from "./components/CodeTypingAnimation";
import PageTransition from "./components/PageTransition";
import GlitchText from "./components/GlitchText";
import TechStackCube from "./components/TechStackCube";

// Register ChartJS components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  ChartTooltip,
  Legend
);

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ff7edb',
      },
      secondary: {
        main: '#00ffc8',
      },
      error: {
        main: '#ffcc00',
      },
      background: {
        default: '#0a0e17',
        paper: '#1a1f2e',
      },
      text: {
        primary: '#f0f6fc',
        secondary: '#a0a8b7',
      },
    },
    typography: {
      fontFamily: '"JetBrains Mono", "Fira Code", monospace',
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 600,
      },
      h3: {
        fontWeight: 600,
      },
      button: {
        textTransform: 'none',
        fontWeight: 500,
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            border: '1px solid #252a3a',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 8,
            padding: '8px 16px',
            '&:hover': {
              borderColor: '#ff7edb',
              boxShadow: '0 0 15px rgba(255, 126, 219, 0.5)',
            },
          },
          contained: {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 0 15px rgba(255, 126, 219, 0.5)',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 4,
            backgroundColor: 'rgba(255, 126, 219, 0.1)',
            color: '#ff7edb',
            border: '1px solid rgba(255, 126, 219, 0.3)',
            '&:hover': {
              backgroundColor: 'rgba(255, 126, 219, 0.2)',
            },
          },
        },
      },
    },
  });

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesConfig = {
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#ff7edb", "#00ffc8", "#ffcc00"]
      },
      shape: {
        type: ["circle", "triangle", "polygon"],
        options: {
          polygon: {
            sides: 6
          }
        }
      },
      opacity: {
        value: 0.6,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#252a3a",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.8
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  };

  const skills = [
    { name: "Frontend Development", level: 90 },
    { name: "Backend Development", level: 85 },
    { name: "DevOps & Cloud", level: 88 },
    { name: "Database Management", level: 85 },
    { name: "Problem Solving", level: 90 },
    { name: "Team Leadership", level: 85 }
  ];

  const devOpsSkills = [
    {
      category: "Cloud Platforms",
      items: [
        { name: "Google Cloud Platform", level: 90, icon: "gcp" },
        { name: "Cloud Run", level: 85, icon: "cloud-run" },
        { name: "Cloud Functions", level: 85, icon: "cloud-functions" },
        { name: "Cloud Storage", level: 88, icon: "cloud-storage" }
      ]
    },
    {
      category: "DevOps Tools",
      items: [
        { name: "Docker", level: 85, icon: "docker" },
        { name: "Kubernetes", level: 80, icon: "kubernetes" }
      ]
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const [showThankYou] = useState(false);

  const projects = [
    {
      title: "Restaurant Website",
      description: "Experience the ultimate dining experience with our sleek restaurant webpage. Built with JavaScript, HTML, and CSS, our user-friendly interface allows for easy browsing, menu selection, and online reservations.",
      technologies: ["JavaScript", "HTML", "CSS"],
      category: "frontend",
      github: "https://github.com/butrintbytyqi/Restaurant-Website",
      live: null
    },
    {
      title: "StoreFlow",
      description: "A modern e-commerce platform built with HTML and advanced web technologies. Features include product management, shopping cart functionality, and a streamlined checkout process.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      github: "https://github.com/butrintbytyqi/StoreFlow",
      live: null
    },
    {
      title: "Quiz App",
      description: "An interactive quiz application that tests users' knowledge across various topics. Built with a focus on clean design and user experience.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      github: "https://github.com/butrintbytyqi/Quiz-App",
      live: null
    },
    {
      title: "Counter App",
      description: "Count with ease using our React-powered counter app. Increase or decrease the count with just a tap, and never lose track of your progress.",
      technologies: ["React", "JavaScript", "CSS"],
      category: "frontend",
      github: "https://github.com/butrintbytyqi/Counter-App",
      live: null
    },
    {
      title: "Marketplace App",
      description: "The ultimate marketplace app for effortlessly selling your unwanted items! Simply snap photos, set competitive prices, and connect with a vast network of eager buyers in your area. Enjoy secure transactions and seamless communication.",
      technologies: ["JavaScript", "React", "Node.js"],
      category: "fullstack",
      github: "https://github.com/butrintbytyqi/Marketplace-App",
      live: null
    },
    {
      title: "Feedback App",
      description: "A dynamic feedback collection and management system built with JavaScript. Allows users to submit, view, and interact with feedback in real-time.",
      technologies: ["JavaScript", "React", "CSS"],
      category: "frontend",
      github: "https://github.com/butrintbytyqi/Feedback-App",
      live: null
    },
    {
      title: "Digital Ordering App",
      description: "Digital Ordering Application for streamlined food service operations. Features include menu management, order processing, and real-time updates.",
      technologies: ["PHP", "MySQL", "JavaScript"],
      category: "fullstack",
      github: "https://github.com/butrintbytyqi/doa",
      live: null
    },
    {
      title: "Coffee Shop Website",
      description: "A beautifully designed coffee shop website showcasing menu items, locations, and online ordering capabilities.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      github: "https://github.com/butrintbytyqi/Coffee-Shop-Website",
      live: null
    }
  ];

  const radarData = {
    labels: ['Frontend', 'Backend', 'DevOps', 'Problem Solving', 'Database', 'Team Leadership'],
    datasets: [{
      label: 'Skills Proficiency',
      data: [90, 85, 88, 90, 85, 85],
      backgroundColor: 'rgba(255, 126, 219, 0.2)',
      borderColor: '#ff7edb',
      borderWidth: 2,
      pointBackgroundColor: '#00ffc8',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#ff7edb'
    }]
  };

  const radarOptions = {
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        pointLabels: {
          color: '#a0a8b7',
          font: {
            family: '"JetBrains Mono", monospace',
            size: 12
          }
        },
        ticks: {
          color: '#a0a8b7',
          backdropColor: 'transparent'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
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
      
      {/* Replace CyberpunkBackground with CodeRainAnimation */}
      <CodeRainAnimation opacity={0.15} speed={1.2} density={0.6} />
      
      <Particles id="tsparticles" init={particlesInit} options={particlesConfig} />
      
      <Container maxWidth={false} sx={{ overflow: "hidden" }}>
        {/* Navigation */}
        <Box
          component="nav"
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(18, 18, 18, 0.8)",
            boxShadow: 1,
            py: 2,
          }}
        >
          <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Box component="div" sx={{ display: "flex", gap: 4 }}>
              <Button
                onClick={() => scrollToSection('home')}
                sx={{ color: theme.palette.text.primary, textDecoration: 'none', '&:hover': { color: theme.palette.primary.main } }}
              >
                Home
              </Button>
              <Button
                onClick={() => scrollToSection('aboutme')}
                sx={{ color: theme.palette.text.primary, textDecoration: 'none', '&:hover': { color: theme.palette.primary.main } }}
              >
                About
              </Button>
              <Button
                onClick={() => scrollToSection('skills')}
                sx={{ color: theme.palette.text.primary, textDecoration: 'none', '&:hover': { color: theme.palette.primary.main } }}
              >
                Skills
              </Button>
              <Button
                onClick={() => scrollToSection('projects')}
                sx={{ color: theme.palette.text.primary, textDecoration: 'none', '&:hover': { color: theme.palette.primary.main } }}
              >
                Projects
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                sx={{ color: theme.palette.text.primary, textDecoration: 'none', '&:hover': { color: theme.palette.primary.main } }}
              >
                Contact
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Hero Section */}
        <Box
          id="home"
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "url('/img/hero-bg.jpg') center/cover no-repeat",
              zIndex: -1,
              filter: "blur(5px)"
            }
          }}
        >
          <Container>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <GlitchText
                    text="Butrint Bytyqi"
                    variant="h1"
                    component="h1"
                    intensity="medium"
                    sx={{ 
                      fontWeight: 700, 
                      mb: 2,
                      fontSize: { xs: '3rem', md: '4.5rem' }
                    }}
                  />
                  <Box sx={{ mb: 4 }}>
                    <TypeAnimation
                      sequence={[
                        "Full Stack Developer",
                        2000,
                        "DevOps Engineer",
                        2000,
                        "Cloud Architect",
                        2000,
                        "Problem Solver",
                        2000,
                      ]}
                      wrapper="span"
                      cursor={true}
                      repeat={Infinity}
                      style={{ 
                        fontSize: "1.5rem",
                        display: "inline-block",
                        color: theme.palette.secondary.main,
                        textShadow: `0 0 10px ${theme.palette.secondary.main}`
                      }}
                    />
                  </Box>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                      variant="contained"
                      size="large"
                      component="a"
                      href="#contact"
                      sx={{
                        borderRadius: "30px",
                        textTransform: "none",
                        fontSize: "1.1rem",
                        py: 1.5,
                        px: 4
                      }}
                    >
                      Get in Touch
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      component="a"
                      href={cv}
                      target="_blank"
                      sx={{
                        borderRadius: "30px",
                        textTransform: "none",
                        fontSize: "1.1rem",
                        py: 1.5,
                        px: 4
                      }}
                    >
                      Download CV
                    </Button>
                  </Box>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="float-animation"
                >
                  {/* Add your hero image or 3D element here */}
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Skills Section */}
        <Box
          id="skills"
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{ py: 8 }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            Skills
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={skill.name}>
                <Tilt>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "16px",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" component="h3" gutterBottom>
                        {skill.name}
                      </Typography>
                      <Box
                        sx={{
                          height: "10px",
                          background: "#e0e0e0",
                          borderRadius: "5px",
                          mt: 2
                        }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          style={{
                            height: "100%",
                            background: theme.palette.primary.main,
                            borderRadius: "5px"
                          }}
                        />
                      </Box>
                    </CardContent>
                  </Card>
                </Tilt>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Skills Radar Chart Section */}
        <Box sx={{ py: 8 }}>
          <Typography variant="h2" align="center" gutterBottom>
            Skills Overview
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ height: 400, maxWidth: 600, margin: 'auto' }}>
                <Radar data={radarData} options={radarOptions} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 3 }}>
                {skills.map((skill) => (
                  <Box key={skill.name} sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography>{skill.name}</Typography>
                      <Typography>{skill.level}%</Typography>
                    </Box>
                    <Box sx={{
                      height: "10px",
                      background: "#e0e0e0",
                      borderRadius: "5px",
                      mt: 2
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        style={{
                          height: "100%",
                          background: theme.palette.primary.main,
                          borderRadius: "5px"
                        }}
                      />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* DevOps and Cloud Skills Section */}
        <Box sx={{ py: 8, backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <Container>
            <Typography variant="h2" align="center" gutterBottom>
              DevOps & Cloud Expertise
            </Typography>
            <Typography variant="h5" align="center" sx={{ mb: 6, color: 'text.secondary' }}>
              Specialized in Google Cloud Platform and Modern DevOps Practices
            </Typography>
            
            {devOpsSkills.map((category, index) => (
              <Box key={index} sx={{ mb: 6 }}>
                <Typography variant="h4" sx={{ mb: 3 }}>
                  {category.category}
                </Typography>
                <Grid container spacing={3}>
                  {category.items.map((skill, skillIndex) => (
                    <Grid item xs={12} sm={6} md={3} key={skillIndex}>
                      <Card
                        component={motion.div}
                        whileHover={{ y: -10 }}
                        sx={{
                          p: 3,
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          background: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            mb: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          {skill.icon === 'gcp' && <CloudIcon sx={{ fontSize: 40, color: '#2196f3' }} />}
                          {skill.icon === 'cloud-run' && <BuildIcon sx={{ fontSize: 40, color: '#2196f3' }} />}
                          {skill.icon === 'cloud-functions' && <CodeIcon sx={{ fontSize: 40, color: '#2196f3' }} />}
                          {skill.icon === 'cloud-storage' && <StorageIcon sx={{ fontSize: 40, color: '#2196f3' }} />}
                          {skill.icon === 'docker' && <CloudIcon sx={{ fontSize: 40, color: '#2196f3' }} />}
                          {skill.icon === 'kubernetes' && <BuildIcon sx={{ fontSize: 40, color: '#2196f3' }} />}
                          {skill.icon === 'cicd' && <SecurityIcon sx={{ fontSize: 40, color: '#2196f3' }} />}
                          {skill.icon === 'terraform' && <StorageIcon sx={{ fontSize: 40, color: '#2196f3' }} />}
                        </Box>
                        <Typography variant="h6" align="center" gutterBottom>
                          {skill.name}
                        </Typography>
                        <Box sx={{ width: '100%', mt: 2 }}>
                          <LinearProgress
                            variant="determinate"
                            value={skill.level}
                            sx={{
                              height: 8,
                              borderRadius: 4,
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              '& .MuiLinearProgress-bar': {
                                backgroundColor: '#2196f3'
                              }
                            }}
                          />
                          <Typography
                            variant="body2"
                            align="right"
                            sx={{ mt: 1, color: 'text.secondary' }}
                          >
                            {skill.level}%
                          </Typography>
                        </Box>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))}

            <Box sx={{ mt: 6, textAlign: 'center' }}>
              <Typography variant="body1" sx={{ mb: 3, maxWidth: '800px', mx: 'auto' }}>
                With extensive experience in Google Cloud Platform, I specialize in designing and implementing 
                scalable cloud solutions. My expertise includes containerization, serverless architecture, 
                and infrastructure as code, enabling efficient and reliable deployment pipelines.
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* Experience Timeline */}
        <Box id="experience" sx={{ py: 10 }}>
          <CodeDivider text="experience.js" color="#ffcc00" />
          <PageTransition direction="up" delay={0.2}>
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <GlitchText
                text="Experience & Education"
                variant="h2"
                component="h2"
                intensity="low"
                sx={{ fontWeight: 700, mb: 2 }}
              />
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: "800px", mx: "auto" }}>
                My professional journey and educational background.
              </Typography>
            </Box>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: theme.palette.background.paper, color: theme.palette.text.primary }}
                contentArrowStyle={{ borderRight: `7px solid ${theme.palette.background.paper}` }}
                date="2023 - Present"
                iconStyle={{ background: theme.palette.primary.main, color: '#fff' }}
                icon={<SchoolIcon />}
              >
                <Typography variant="h6" component="h3">
                  Masters of Computer Science
                </Typography>
                <Typography variant="subtitle1" component="h4">
                  UPZ - Ukshin Hoti University
                </Typography>
                <Typography variant="body2">
                  Advanced studies in computer science, focusing on cutting-edge technologies and research methodologies.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Button 
                    size="small" 
                    href="https://uni-prizren.com/" 
                    target="_blank"
                    variant="outlined"
                    sx={{ 
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      '&:hover': {
                        borderColor: theme.palette.primary.main,
                        backgroundColor: 'rgba(255, 126, 219, 0.1)'
                      }
                    }}
                  >
                    University Website
                  </Button>
                </Box>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: theme.palette.background.paper, color: theme.palette.text.primary }}
                contentArrowStyle={{ borderRight: `7px solid ${theme.palette.background.paper}` }}
                date="July 2022 - Present"
                iconStyle={{ background: theme.palette.secondary.main, color: '#fff' }}
                icon={<WorkIcon />}
              >
                <Typography variant="h6" component="h3">
                  Co-Founder & Executive Director
                </Typography>
                <Typography variant="subtitle1" component="h4">
                  DOA (Digital Ordering Application)
                </Typography>
                <Typography variant="body2" paragraph>
                  Led the development and implementation of DOA, a QR-based digital ordering system for restaurants.
                </Typography>
                <Typography variant="body2" component="div">
                  <ul style={{ paddingLeft: '20px', margin: '0' }}>
                    <li>Managed business strategy, partnerships, and expansion, targeting the European market.</li>
                    <li>Developed and maintained the web application using Vue.js, Laravel, and MySQL.</li>
                    <li>Negotiated sales and partnership deals with restaurant owners to drive product adoption.</li>
                    <li>Conducted market research to analyze restaurant industry trends and customer behavior.</li>
                    <li>Implemented digital payment solutions and POS integrations for seamless transactions.</li>
                    <li>Managed customer acquisition, sales processes, and pricing strategies.</li>
                  </ul>
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Chip 
                    label="Vue.js" 
                    size="small" 
                    sx={{ mr: 1, mb: 1, background: 'rgba(255, 126, 219, 0.2)' }} 
                  />
                  <Chip 
                    label="Laravel" 
                    size="small" 
                    sx={{ mr: 1, mb: 1, background: 'rgba(0, 255, 200, 0.2)' }} 
                  />
                  <Chip 
                    label="MySQL" 
                    size="small" 
                    sx={{ mr: 1, mb: 1, background: 'rgba(255, 204, 0, 0.2)' }} 
                  />
                  <Chip 
                    label="QR Technology" 
                    size="small" 
                    sx={{ mr: 1, mb: 1, background: 'rgba(255, 126, 219, 0.2)' }} 
                  />
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Button 
                    size="small" 
                    href="https://appdoa.com/" 
                    target="_blank"
                    variant="contained"
                    startIcon={<LaunchIcon />}
                    sx={{ 
                      backgroundColor: theme.palette.secondary.main,
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: theme.palette.secondary.dark,
                        boxShadow: `0 0 15px ${theme.palette.secondary.main}`
                      }
                    }}
                  >
                    Visit DOA Website
                  </Button>
                </Box>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: theme.palette.background.paper, color: theme.palette.text.primary }}
                contentArrowStyle={{ borderRight: `7px solid ${theme.palette.background.paper}` }}
                date="July 2022 - Present"
                iconStyle={{ background: theme.palette.primary.main, color: '#fff' }}
                icon={<WorkIcon />}
              >
                <Typography variant="h6" component="h3">
                  Programming Trainer (Internship)
                </Typography>
                <Typography variant="subtitle1" component="h4">
                  Akademia JCODERS
                </Typography>
                <Typography variant="body2" paragraph>
                  Teaching programming fundamentals to students and helping develop their technical skills.
                </Typography>
                <Typography variant="body2" component="div">
                  <ul style={{ paddingLeft: '20px', margin: '0' }}>
                    <li>Instructing students in programming basics and advanced concepts</li>
                    <li>Developing curriculum and learning materials</li>
                    <li>Providing mentorship and guidance for student projects</li>
                    <li>Evaluating student progress and providing constructive feedback</li>
                  </ul>
                </Typography>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: theme.palette.background.paper, color: theme.palette.text.primary }}
                contentArrowStyle={{ borderRight: `7px solid ${theme.palette.background.paper}` }}
                date="November 9-10, 2023"
                iconStyle={{ background: theme.palette.secondary.main, color: '#fff' }}
                icon={<CodeIcon />}
              >
                <Typography variant="h6" component="h3">
                  BRIDGE 2023 Conference Presenter
                </Typography>
                <Typography variant="subtitle1" component="h4">
                  Research Paper Presentation
                </Typography>
                <Typography variant="body2" paragraph>
                  Presented research on "A Proposed System for Real-Time Face Recognition: Enhancing Access Control, Security, and Efficiency in Cross-Domain Applications."
                </Typography>
                <Typography variant="body2" paragraph>
                  Engaged with researchers and industry professionals on AI-driven security applications and gained insights into the latest developments in the field.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Button 
                    size="small" 
                    href="https://uni-prizren.com/en/bridge-2023/" 
                    target="_blank"
                    variant="outlined"
                    sx={{ 
                      borderColor: theme.palette.secondary.main,
                      color: theme.palette.secondary.main,
                      '&:hover': {
                        borderColor: theme.palette.secondary.main,
                        backgroundColor: 'rgba(0, 255, 200, 0.1)'
                      }
                    }}
                  >
                    Conference Details
                  </Button>
                </Box>
              </VerticalTimelineElement>
              
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: theme.palette.background.paper, color: theme.palette.text.primary }}
                contentArrowStyle={{ borderRight: `7px solid ${theme.palette.background.paper}` }}
                date="Bachelor's Degree"
                iconStyle={{ background: theme.palette.primary.main, color: '#fff' }}
                icon={<SchoolIcon />}
              >
                <Typography variant="h6" component="h3">
                  Bachelor in Software Design
                </Typography>
                <Typography variant="subtitle1" component="h4">
                  UPZ - Universiteti i Prizrenit
                </Typography>
                <Typography variant="body2" paragraph>
                  Studied software design and development, building a strong foundation in computer science principles and programming practices.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Button 
                    size="small" 
                    href="http://www.uni-prizren.com" 
                    target="_blank"
                    variant="outlined"
                    sx={{ 
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      '&:hover': {
                        borderColor: theme.palette.primary.main,
                        backgroundColor: 'rgba(255, 126, 219, 0.1)'
                      }
                    }}
                  >
                    University Website
                  </Button>
                </Box>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: theme.palette.background.paper, color: theme.palette.text.primary }}
                contentArrowStyle={{ borderRight: `7px solid ${theme.palette.background.paper}` }}
                date="January 2021 - April 2022"
                iconStyle={{ background: theme.palette.secondary.main, color: '#fff' }}
                icon={<CodeIcon />}
              >
                <Typography variant="h6" component="h3">
                  Web Development Training
                </Typography>
                <Typography variant="subtitle1" component="h4">
                  Maker Space
                </Typography>
                <Typography variant="body2" paragraph>
                  Intensive training in web development technologies including HTML, CSS, JavaScript, Bootstrap, and React.
                </Typography>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </PageTransition>
        </Box>

        {/* Projects Section with Filtering */}
        <Box id="projects" sx={{ py: 10 }}>
          <CodeDivider text="projects.js" color="secondary" />
          <Typography variant="h2" align="center" gutterBottom>
            Projects
          </Typography>
          <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            {['all', 'frontend', 'fullstack'].map((cat) => (
              <Button
                key={cat}
                onClick={() => setFilter(cat)}
                variant={filter === cat ? 'contained' : 'outlined'}
                sx={{
                  textTransform: 'capitalize',
                  px: 3,
                  py: 1,
                  borderRadius: '20px'
                }}
              >
                {cat === 'frontend' ? 'Frontend' : cat === 'fullstack' ? 'Full Stack' : 'All'}
              </Button>
            ))}
          </Box>
          <Grid container spacing={4}>
            {projects
              .filter(project => filter === 'all' || project.category === filter)
              .map((project, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card
                    component={motion.div}
                    whileHover={{ y: -10 }}
                    sx={{
                      height: '100%',
                      background: '#1e1e1e',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: '#2196f3',
                        boxShadow: '0 8px 16px rgba(33, 150, 243, 0.1)'
                      }
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#fff' }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 2, minHeight: '4.5em', color: 'rgba(255, 255, 255, 0.7)' }}>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(33, 150, 243, 0.1)',
                              borderColor: '#2196f3',
                              color: '#fff',
                              '&:hover': {
                                backgroundColor: 'rgba(33, 150, 243, 0.2)'
                              }
                            }}
                          />
                        ))}
                      </Box>
                      <Box sx={{ display: 'flex', gap: 2, borderTop: '1px solid rgba(255, 255, 255, 0.1)', pt: 2 }}>
                        <Button
                          component="a"
                          href={project.github}
                          target="_blank"
                          startIcon={<GitHubIcon />}
                          variant="outlined"
                          size="small"
                          sx={{
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                            color: '#fff',
                            '&:hover': {
                              borderColor: '#2196f3',
                              backgroundColor: 'rgba(33, 150, 243, 0.1)'
                            }
                          }}
                        >
                          View Code
                        </Button>
                        {project.live && (
                          <Button
                            component="a"
                            href={project.live}
                            target="_blank"
                            startIcon={<CodeIcon />}
                            variant="outlined"
                            size="small"
                            sx={{
                              borderColor: 'rgba(255, 255, 255, 0.3)',
                              color: '#fff',
                              '&:hover': {
                                borderColor: '#2196f3',
                                backgroundColor: 'rgba(33, 150, 243, 0.1)'
                              }
                            }}
                          >
                            Live Demo
                          </Button>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Box>

        {/* Project Dialog */}
        <Dialog
          open={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          maxWidth="md"
          fullWidth
        >
          {selectedProject && (
            <>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogContent>
                <Typography paragraph>{selectedProject.description}</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {selectedProject.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(33, 150, 243, 0.1)',
                        borderColor: '#2196f3',
                        color: '#fff',
                        '&:hover': {
                          backgroundColor: 'rgba(33, 150, 243, 0.2)',
                        }
                      }}
                    />
                  ))}
                </Box>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setSelectedProject(null)}>Close</Button>
                <Button
                  component="a"
                  href={selectedProject.github}
                  target="_blank"
                  startIcon={<GitHubIcon />}
                >
                  View on GitHub
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>

        {/* Thank You Snackbar */}
        <AnimatePresence>
          {showThankYou && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              style={{
                position: 'fixed',
                bottom: 20,
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#2196f3',
                color: '#fff',
                padding: '1rem 2rem',
                borderRadius: 8,
                zIndex: 1000
              }}
            >
              Thank you for your message!
            </motion.div>
          )}
        </AnimatePresence>

        {/* About Section */}
        <Box
          id="aboutme"
          sx={{
            py: 10,
            background: 'linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)',
            borderRadius: '20px',
            my: 4,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <CodeDivider text="about.js" color="primary" />
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  <GlitchText
                    text="About Me"
                    variant="h2"
                    component="h2"
                    intensity="low"
                    sx={{ fontWeight: 700, mb: 4 }}
                  />
                  
                  <GlitchText
                    text="Full-Stack Developer | Data Science Enthusiast | Tech Entrepreneur"
                    variant="h5"
                    component="h5"
                    intensity="low"
                    sx={{ mb: 3, color: '#2196f3', fontWeight: 500 }}
                  />

                  <Box sx={{ mb: 4 }}>
                    <Typography variant="body1" paragraph sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      I'm a Full-Stack Developer with a passion for building scalable, efficient, and data-driven solutions. 
                      With a strong foundation in Computer Science, I specialize in creating seamless user experiences through modern web and mobile development.
                    </Typography>

                    <Typography variant="body1" paragraph sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      My expertise spans across the entire development stack:
                    </Typography>

                    <Grid container spacing={2} sx={{ mb: 3 }}>
                      <Grid item xs={12} sm={6}>
                        <Paper 
                          elevation={0}
                          sx={{
                            p: 2,
                            background: 'rgba(33, 150, 243, 0.05)',
                            border: '1px solid rgba(33, 150, 243, 0.2)',
                            borderRadius: '10px',
                            height: '100%'
                          }}
                        >
                          <Typography variant="h6" gutterBottom sx={{ color: '#2196f3' }}>
                            Frontend Excellence
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                            React • React Native • Angular
                            Creating intuitive and responsive user interfaces
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Paper 
                          elevation={0}
                          sx={{
                            p: 2,
                            background: 'rgba(33, 150, 243, 0.05)',
                            border: '1px solid rgba(33, 150, 243, 0.2)',
                            borderRadius: '10px',
                            height: '100%'
                          }}
                        >
                          <Typography variant="h6" gutterBottom sx={{ color: '#2196f3' }}>
                            Backend Mastery
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                            Java Spring Boot • PHP • MySQL
                            Building robust and scalable server-side solutions
                          </Typography>
                        </Paper>
                      </Grid>
                    </Grid>

                    <Typography variant="body1" paragraph sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      As a tech entrepreneur, I co-founded DOA (Digital Ordering Application), revolutionizing restaurant tech
                      through digital automation and AI-driven insights.
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" gutterBottom sx={{ color: '#2196f3' }}>
                      Tech Stack & Expertise
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {[
                        'React', 'React Native', 'Angular', 'Java', 'Spring Boot', 'PHP', 
                        'MySQL', 'Node.js', 'Firebase', 'Python', 'Google Cloud', 'Docker'
                      ].map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          sx={{
                            backgroundColor: 'rgba(33, 150, 243, 0.1)',
                            border: '1px solid rgba(33, 150, 243, 0.3)',
                            color: '#fff',
                            '&:hover': {
                              backgroundColor: 'rgba(33, 150, 243, 0.2)',
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ color: '#2196f3' }}>
                      Areas of Interest
                    </Typography>
                    <Grid container spacing={1}>
                      {[
                        'AI & Machine Learning',
                        'Data Science',
                        'Software Architecture',
                        'DevOps',
                        'Digital Innovation',
                        'Entrepreneurship'
                      ].map((interest) => (
                        <Grid item key={interest}>
                          <Chip
                            label={interest}
                            sx={{
                              backgroundColor: 'rgba(33, 150, 243, 0.05)',
                              border: '1px solid rgba(33, 150, 243, 0.2)',
                              color: '#fff',
                              '&:hover': {
                                backgroundColor: 'rgba(33, 150, 243, 0.15)',
                              }
                            }}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 2,
                    p: 4,
                    background: 'rgba(33, 150, 243, 0.03)',
                    borderRadius: '20px',
                    border: '1px solid rgba(33, 150, 243, 0.1)',
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ color: '#2196f3' }}>
                    Key Highlights
                  </Typography>
                  
                  {[
                    {
                      title: 'Full-Stack Development',
                      description: 'Building scalable web and mobile applications'
                    },
                    {
                      title: 'Data Science & AI',
                      description: 'Machine learning and predictive modeling expertise'
                    },
                    {
                      title: 'DevOps & Cloud',
                      description: 'Google Cloud, Docker, and CI/CD implementation'
                    },
                    {
                      title: 'Entrepreneurship',
                      description: 'Co-founder of DOA, revolutionizing restaurant tech'
                    }
                  ].map((highlight, index) => (
                    <Paper
                      key={index}
                      elevation={0}
                      sx={{
                        p: 2,
                        mb: 2,
                        background: 'rgba(33, 150, 243, 0.1)',
                        border: '1px solid rgba(33, 150, 243, 0.2)',
                        borderRadius: '10px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(33, 150, 243, 0.15)',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      <Typography variant="h6" component="h3" sx={{ color: '#fff', mb: 1 }}>
                        {highlight.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        {highlight.description}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Container>
          
          {/* Background decoration */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle at center, rgba(33, 150, 243, 0.1) 0%, rgba(33, 150, 243, 0) 70%)',
              zIndex: 1,
              pointerEvents: 'none'
            }}
          />
        </Box>

        <Box sx={{ mt: 8, mb: 4, width: '100%', maxWidth: '800px', mx: 'auto' }}>
          <PageTransition direction="up" delay={0.2}>
            <CodeTypingAnimation 
              language="javascript"
              codeSnippets={[
                `// Welcome to my portfolio
const developer = {
  name: "Butrint Bytyqi",
  role: "Full Stack Developer & DevOps Engineer",
  skills: ["JavaScript", "React", "Vue.js", "Laravel", "MySQL", "AWS"],
  passions: ["Clean Code", "Problem Solving", "Innovation"],
  
  sayHello: function() {
    console.log("Thanks for visiting my portfolio!");
    return this.startCodingJourney();
  },
  
  startCodingJourney: function() {
    // Let's build something amazing together
    return true;
  }
};

developer.sayHello();`,
                `// DOA - Digital Ordering Application
class DigitalOrderingApp {
  constructor() {
    this.technologies = ["Vue.js", "Laravel", "MySQL"];
    this.features = [
      "QR-based ordering system",
      "Digital payments",
      "POS integration",
      "Customer analytics"
    ];
  }
  
  initialize() {
    this.setupDatabase();
    this.createUserInterface();
    this.implementPaymentGateway();
    console.log("DOA is ready to revolutionize restaurant ordering!");
  }
  
  // Visit https://appdoa.com/ to learn more
}

const doa = new DigitalOrderingApp();
doa.initialize();`
              ]}
            />
          </PageTransition>
        </Box>
        
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <GlitchText
            text="Tech Stack"
            variant="h3"
            component="h3"
            intensity="low"
            sx={{ fontWeight: 700, mb: 4 }}
          />
          <TechStackCube 
            technologies={[
              "JavaScript", "React", "Node.js", "TypeScript", "HTML", "CSS",
              "Python", "Express", "MongoDB", "MySQL", "PostgreSQL", "Redis",
              "Docker", "Kubernetes", "AWS", "GCP", "CI/CD", "Git",
              "REST API", "GraphQL", "Webpack", "Jest", "Linux", "Nginx"
            ]}
          />
        </Box>
        
        {/* Contact Section */}
        <Box
          id="contact"
          sx={{
            py: 8,
            background: 'linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)',
            borderRadius: '20px',
            my: 4,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <CodeDivider text="contact.js" color="primary" />
          
          <PageTransition direction="up" delay={0.2}>
            <Container maxWidth="lg">
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ position: 'relative', zIndex: 2 }}>
                    <Typography
                      variant="h2"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        background: 'linear-gradient(45deg, #2196f3, #64b5f6)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        mb: 4
                      }}
                    >
                      Contact Me
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      If you'd like to get in touch, please fill out the form below.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Button
                        variant="contained"
                        size="large"
                        component="a"
                        href="mailto:butrinti022@gmail.com"
                        sx={{
                          borderRadius: "30px",
                          textTransform: "none",
                          fontSize: "1.1rem",
                          py: 1.5,
                          px: 4
                        }}
                      >
                        Send Email
                      </Button>
                      <Button
                        variant="outlined"
                        size="large"
                        component="a"
                        href="https://www.linkedin.com/in/butrint-bytyqi-37859a235/"
                        target="_blank"
                        sx={{
                          borderRadius: "30px",
                          textTransform: "none",
                          fontSize: "1.1rem",
                          py: 1.5,
                          px: 4
                        }}
                      >
                        LinkedIn
                      </Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      position: 'relative',
                      zIndex: 2,
                      p: 4,
                      background: 'rgba(33, 150, 243, 0.03)',
                      borderRadius: '20px',
                      border: '1px solid rgba(33, 150, 243, 0.1)',
                    }}
                  >
                    <Typography variant="h5" gutterBottom sx={{ color: '#2196f3' }}>
                      Get in Touch
                    </Typography>
                    <motion.form
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                    >
                      <motion.input
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        type="text"
                        placeholder="Name"
                        style={{ padding: "1rem", borderRadius: "10px", border: "none" }}
                      />
                      <motion.input
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        type="email"
                        placeholder="Email"
                        style={{ padding: "1rem", borderRadius: "10px", border: "none" }}
                      />
                      <motion.textarea
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        placeholder="Message"
                        style={{ padding: "1rem", borderRadius: "10px", border: "none" }}
                      />
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        type="submit"
                        style={{ padding: "1rem", borderRadius: "10px", border: "none", backgroundColor: theme.palette.primary.main, color: "#fff" }}
                      >
                        Send Message
                      </motion.button>
                    </motion.form>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </PageTransition>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
