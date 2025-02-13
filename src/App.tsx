import { lightTheme } from "./theme/theme";
import { useEffect, useRef, useState } from "react";
import { Box, CssBaseline, ThemeProvider, Typography, useTheme } from "@mui/material";

import Home from "./views/Home";
import Books from "./views/Books";

import HomeIcon from './assets/home-icon-black.svg';
import BookIcon from './assets/book-icon-black.svg';
import WorldIcon from './assets/world-icon-black.svg';
import MusicIcon from './assets/music-icon-black.svg';
import Travel from "./views/Travel";
import Music from "./views/Music";

enum View {
  HOME = 'HOME',
  BOOKS = 'BOOKS',
  TRAVEL = 'TRAVEL',
  MUSIC = 'MUSIC'
}

interface MenuItem {
  icon: string;
  label: string;
  view: View;
}

function App() {

  const theme = useTheme();
  const contentRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<View>(View.HOME);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);

  const menuItems: MenuItem[] = [
    {
      icon: HomeIcon,
      label: 'Luke Lind',
      view: View.HOME
    },
    {
      icon: BookIcon,
      label: 'Books',
      view: View.BOOKS
    },
    {
      icon: WorldIcon,
      label: 'Travel',
      view: View.TRAVEL
    },
    {
      icon: MusicIcon,
      label: 'Music',
      view: View.MUSIC
    }
  ];

  useEffect(() => {
    const checkIfScrollable = () => {
      if (contentRef.current) {
        const hasScroll = contentRef.current.scrollHeight > contentRef.current.clientHeight;
        setIsScrollable(hasScroll);
      }
    };

    const handleScroll = () => {
      if (contentRef.current) {
        setIsScrolled(contentRef.current.scrollTop > 20); // Show after 20px of scroll
      }
    };

    checkIfScrollable();
    // Add event listeners
    window.addEventListener('resize', checkIfScrollable);
    contentRef.current?.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkIfScrollable);
      contentRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, [view]);

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />

      <Box
        sx={{ 
          height: '20rem',
          display: 'flex', 
          flexDirection: 'column', 
          width: { xs: '90%', md: '35%' },
          margin: { xs: '2rem auto 0 auto', md: '8rem auto 0 auto' },
        }}
      >

        {/* MENU ITEMS */}
        <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: { xs: 'flex-start', md: 'space-between' }, gap: { xs: '1rem', md: '0' } }}>
          {menuItems.map((item) => (
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                opacity: view === item.view ? 1 : 0.5,
                transition: 'opacity 0.3s ease',
                '&:hover': { opacity: 1, cursor: 'pointer' }
              }}
              onClick={() => setView(item.view)}
            >
              <img src={item.icon} style={{ width: '1.5rem', height: '1.5rem', margin: '0 1rem 0 0' }} />
              <Typography variant='body1' sx={{ display: { xs: 'none', md: 'block' } }}>{item.label}</Typography>
            </Box>
          ))}  
        </Box>

        {/* TITLE */}
        <Box sx={{ display: 'flex', flexDirection: 'column', m: { xs: '4rem 0 0 0', md: '6rem 0 0 0' } }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', m: '0 0 2rem 0' }}>
              <img src={HomeIcon} style={{ width: '2rem', height: '2rem', margin: '0 1.5rem 0 0' }} />
              <Typography variant='h4'>{menuItems.find(item => item.view === view)?.label}</Typography>
          </Box>
          <Box sx={{ position: 'relative' }}>
            <Box
              ref={contentRef}
              sx={{ 
                maxHeight: { xs: '75vh', md: '60vh' },
                overflowY: 'auto',
                '&::-webkit-scrollbar': {
                display: 'none'
              },
              scrollbarWidth: 'none',
              '-ms-overflow-style': 'none',
            }}>
              {view === View.HOME && (<Home />)}
              {view === View.BOOKS && (<Books />)}
              {view === View.TRAVEL && (<Travel />)}
              {view === View.MUSIC && (<Music />)}
            </Box>
            {isScrolled && isScrollable && view !== View.TRAVEL && (
              <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4rem',
                background: theme.palette.mode === 'light'
                  ? 'linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255,1))'
                  : 'linear-gradient(to top, rgba(33,33,33,0), rgba(33,33,33,1))',
                pointerEvents: 'none',
              }} />
            )}
            {isScrollable && view !== View.TRAVEL && (
              <Box sx={{
                left: 0,
                right: 0,
                bottom: 0,
                height: '4rem',
                position: 'absolute',
              pointerEvents: 'none',
                background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))',
              }} />
            )}
          </Box>
        </Box>

      </Box>

    </ThemeProvider>
  )
}

export default App
