import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {AiOutlineSearch, AiOutlineQuestionCircle, AiOutlineShopping } from 'react-icons/ai'
import {GrClose} from 'react-icons/gr'
import {SlArrowDown, SlLocationPin} from 'react-icons/sl'
import {FiMap} from 'react-icons/fi'
import {GoMail} from 'react-icons/go'
import {HiOutlineDeviceMobile} from 'react-icons/hi'
import { NavLink } from 'react-router-dom';


const drawerWidth = '100%' ;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer   = (

      <div className='bg-[#F4F5F5FF] h-full '>
        <header className='flex justify-between px-4 py-[12px] bg-[#ffffff]'>
          <GrClose size={18} onClick={handleDrawerToggle}/>
            <div className='flex gap-1'>
            <button><span className='text-[#141415] text-[13px] font-medium'>Войти</span></button>
            <span>/</span>
            <button><span className='text-[#141415] text-[13px] font-medium'>Зарегистрироваться</span></button>
            </div>
        </header>
        <List>
          <ListItem disablePadding className='bg-[#ffffff] px-4 py-4 '>
              <ListItemButton sx={{padding: '0', }}>
                  <ListItemIcon sx={{minWidth: '0px'}}>
                      <img src="/img/catalogIcon.svg" alt="" />
                  </ListItemIcon>
                  <span className="text-[#3131c4] text-[12px] ml-2 font-medium">Каталог </span>
              </ListItemButton>
              <SlArrowDown size={0}  className='text-[#3131c4]'/>
          </ListItem>
        </List>

        <List className='bg-[#ffffff] ' sx={{padding: '12px 16px 12px 16px'}}>
          <div className='flex flex-wrap gap-[17px]'>
            <ListItem disablePadding>
                <ListItemButton sx={{padding: '0', }}>
                    <ListItemIcon sx={{minWidth: '0px'}}>
                      <AiOutlineShopping size={25} color='#000000'/>
                    </ListItemIcon>
                    <span className='ml-2 font-medium text-[13px]'>Мои заказы</span>
                </ListItemButton>
            </ListItem>
            <NavLink to={'/Favorite'}>
              <ListItem disablePadding>
                  <ListItemButton sx={{padding: '0', }}>
                      <ListItemIcon sx={{minWidth: '0px'}}>
                          <img src="/img/liked.svg" className='w-[25px]' alt="" />
                      </ListItemIcon>
                      <span className='ml-2 font-medium text-[13px]'>Избранное</span>
                  </ListItemButton>
              </ListItem>             
            </NavLink>

            <ListItem disablePadding>
                <ListItemButton sx={{padding: '0', }}>
                    <ListItemIcon sx={{minWidth: '0px'}}>
                      <SlLocationPin  size={23} color='#000000'/>
                    </ListItemIcon>
                    <span className='ml-2 font-medium text-[13px]'>Город: Ташкент </span>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={{padding: '0 0 0 2px', }}>
                    <ListItemIcon sx={{minWidth: '0px'}}>
                        <FiMap  size={21} color='#000000'/>
                    </ListItemIcon>
                    <span className='ml-2 font-medium text-[13px]'>Пункт выдачи</span>
                </ListItemButton>
            </ListItem>            
          </div>

          <Divider className='py-2 '/>

          <div className='flex flex-wrap gap-[18px] pt-4' >
            <ListItem disablePadding>
                <ListItemButton sx={{padding: '0', }}>
                    <ListItemIcon sx={{minWidth: '0px'}}>
                        <AiOutlineQuestionCircle size={23} color='#000000' />
                    </ListItemIcon>
                    <span className='ml-2 font-medium text-[13px]'>Часто задоваемые вопросы</span>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={{padding: '0', }}>
                    <ListItemIcon sx={{minWidth: '0px', paddingLeft: '2px' }}>
                        <GoMail size={21} color='#000000' />
                    </ListItemIcon>
                    <span className='ml-2 font-medium text-[13px]'>Связаться с нами</span>
               </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={{padding: '0', }}>
                    <ListItemIcon sx={{minWidth: '0px'}}>
                        <HiOutlineDeviceMobile size={23} color='#000000' />
                    </ListItemIcon>
                    <span className='ml-2 font-medium text-[13px]'>Приложение Uzum</span>
               </ListItemButton>
            </ListItem>
          </div>

          <Divider className='py-2 '/>

          <ListItem disablePadding className=' pt-2 '>
              <ListItemButton sx={{padding: '0', }}>
                  <span className="text-[#000000] px-1 text-[13px] font-medium"> О нас</span>
              </ListItemButton>
              <SlArrowDown size={0}  className='text-[#000000]'/>
          </ListItem>

          <Divider className='py-1 '/>
          <Divider/>

          <ListItem disablePadding className=' pt-2 '>
              <ListItemButton sx={{padding: '0', }}>
                  <span className="text-[#000000] px-1 text-[13px] font-medium">Партнёрам</span>
              </ListItemButton>
              <SlArrowDown size={0}  className='text-[#000000]'/>
          </ListItem>

          </List>

      </div>

     
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    <div className='lg:hidden'>
      <Box  sx={{ display: 'flex', }}>
        <CssBaseline />
        <AppBar className=''
          position="absolute"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px`,  backgroundColor: '#ffffff',  },
            boxShadow: 'none'
          }}
        >
          
            <div className='h-[32px] bg-[#f4f5f5]'>
              <h4 className='text-[#62656a] text-[14px] text-center my-1'>Доставим ваш заказ бесплатно — всего за 1 день!</h4>
            </div>
            <Toolbar className=''>
              <IconButton
                color="#000000"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: 'none' }, color: '#000000', marginRight: '12px'
              }}
              >
                <MenuIcon color='#000000'/>
              </IconButton>
              <div className='flex justify-between w-[100%]'>
                <NavLink to={'/'}>
                  <img className='h-[32px]' src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 346 113.06'%3e%3cdefs%3e%3cstyle%3e.cls-1%7bfill:%237000ff;%7d%3c/style%3e%3c/defs%3e%3cg id='Layer_2' data-name='Layer 2'%3e%3cg id='Layer_1-2' data-name='Layer 1'%3e%3cpath class='cls-1' d='M229.12,35.78c0,4.41-2.49,6.45-6.2,6.45s-6.11-2-6.11-6.45V21.23h-8V36.07c0,9.66,8.1,13.45,14.18,13.45s14.17-3.79,14.17-13.45V21.23h-8Z'/%3e%3cpolygon class='cls-1' points='202.04 27.98 202.04 21.23 176.04 21.23 176.04 27.98 191.43 27.98 175.42 42.26 175.42 49.01 203 49.01 203 42.26 186.06 42.26 202.04 27.98'/%3e%3cpath class='cls-1' d='M277.44,20.69c-5.06,0-8.88,2.06-10.78,5.2-1.92-3.14-6.11-5.2-10.47-5.2-8.54,0-12.95,5.46-12.95,12.18V49h8V34c0-3.22,1.7-6.05,5.58-6.05a5.6,5.6,0,0,1,5.91,5.94V49h8V33.89c0-3.22,1.89-5.94,5.74-5.94s5.69,2.83,5.69,6.05V49h8V32.87c0-6.72-4.13-12.18-12.73-12.18'/%3e%3cpath class='cls-1' d='M162.15,35.78c0,4.41-2.49,6.45-6.17,6.45s-6.14-2-6.14-6.45V21.23h-8V36.07c0,9.66,8.07,13.45,14.18,13.45s14.14-3.79,14.14-13.45V21.23h-8Z'/%3e%3cpath class='cls-1' d='M113.4,56.56A56.7,56.7,0,1,1,56.7,0a56.59,56.59,0,0,1,56.7,56.56M63.21,19.64q-3.19-.29-6.51-.28c-2.18,0-4.36.09-6.48.28V49.8h13Zm30,17.59a106.94,106.94,0,0,0-14.49-3.65V58.91c0,18.23-7.75,27.81-22,27.81s-22-9.58-22-27.81V33.58A106.2,106.2,0,0,0,20.2,37.23V59.05a36.52,36.52,0,0,0,73,0Z'/%3e%3cpath class='cls-1' d='M176,63.4c-5.06,0-8.88,2.06-10.78,5.17-1.92-3.11-6.11-5.17-10.47-5.17-8.57,0-13,5.43-13,12.15V91.69h8v-15c0-3.2,1.7-6,5.57-6a5.57,5.57,0,0,1,5.89,5.93V91.69h8V76.57c0-3.22,1.9-5.93,5.75-5.93s5.68,2.85,5.68,6v15h8V75.55c0-6.72-4.13-12.15-12.73-12.15'/%3e%3cpath class='cls-1' d='M225.39,81.94h0v-18h-7.92l.06,4.38c-1.73-2.57-4.76-4.92-10.13-4.92-9.25,0-14,7.18-14,14.39-.17,7.29,5.21,14.55,13.61,14.55,4.45,0,8.52-2,10.47-5.45a6.85,6.85,0,0,0,6.91,4.8H229V85h-1.27c-1.62,0-2.3-.6-2.3-3m-16.32,3.45c-4.56,0-7.95-3.14-7.95-7.55s3.39-7.43,7.95-7.43,8.09,3.08,8.09,7.43-3.39,7.55-8.09,7.55'/%3e%3cpath class='cls-1' d='M235.74,73.41V91.69h8V79.43a7.52,7.52,0,0,1,7.84-7.8h5.23V63.37h-3.93c-4.84,0-8.38,4.13-9.14,6.53v-6h-8Z'/%3e%3cpolygon class='cls-1' points='261.69 91.69 269.69 91.69 269.69 78.1 282.14 91.69 291.59 91.69 278.69 77.42 290.6 63.94 281.18 63.94 269.69 76.94 269.69 55.34 261.69 55.34 261.69 91.69'/%3e%3cpath class='cls-1' d='M300.57,80c0,3.06,1.59,6.14,6.71,6.14,4.69,0,5.37-2.83,5.37-2.83h8.8s-.82,9-14.17,9c-9.31,0-15.14-5.2-15.14-14.5S298,63.4,307.19,63.4s14.94,5.14,14.94,14.44A16.89,16.89,0,0,1,322,80Zm.12-4.89h12.9c0-2.26-1.3-5.48-6.4-5.48s-6.5,3.22-6.5,5.48'/%3e%3cpath class='cls-1' d='M341.05,84.73c-2.74,0-3.73-1.22-3.73-5.09V69.86H346V63.42h-8.68V57.88H333l-7.73,7.37v4.61h4.05V80.69c0,7.77,3.79,11,11.74,11H346v-7Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e" alt="Uzum"></img>
                </NavLink>

                  <div className='flex justify-evenly gap-[20px]'>
                    <NavLink>
                      <img src={'../../public/img/user.svg'} alt="" />
                    </NavLink>
                    <NavLink to={'/favorite'}>
                        <img src={'../../public/img/liked.svg'} alt="" />                      
                    </NavLink>
                    <NavLink to={'/basket'}>
                       <img src={'../../public/img/saved.svg'} alt="" />
                    </NavLink>

                  </div>
              </div>
              

            </Toolbar>
            <form className='mx-3 mt-1 px-3 bg-[#76797f1a] rounded-[8px] h-[32px] flex items-center shadow-3xl'  action="">
            <AiOutlineSearch color='#a6a8ad' size={24} />
              <input className='bg-transparent outline-none text-[#757779] text-[15px] w-full px-[8px]' type="search" name="" id="" placeholder='Искать товары и категории'/>
            </form>
          
        </AppBar>
        <Box className='lg:hidden'
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer 
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', padding: '0 48px 0 0'  },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer 
            variant="permanent"
            sx={{
              display: { xs: 'none',  padding: '0 48px 0 0'},
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}

          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1,  width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
        </Box>
      </Box>
    </div>

    <div className='hidden lg:flex flex-wrap'>
      <div sx={{width: '100%'}} className='bg-[#f4f5f5] min-h-[32px] w-full flex justify-between items-center'>
          <div className='flex gap-[15px]'>
            <div className='flex'>
              <SlLocationPin className='mr-[5px] mt-1'/>
              <span className='text-[14px]'>Город: Ташкент</span>              
            </div>
            <div>
              <span className='text-[14px]'>Пункт выдачи</span>
            </div>
          </div>
          <div>
            <span className='text-[14px] text-[#000000b3]'>Доставим ваш заказ бесплатно — всего за 1 день!</span>
          </div>
          <div className='flex gap-[15px]'>
            <span className='text-[14px]'>Продавайте на Uzum</span>
            <span className='text-[14px]'>Вопрос-ответ</span>
            <span className='text-[14px]'>Мои заказы</span>
            <div className='flex'>
              <img className='w-[18px] mr-[5px]' src="/img/Русский.svg" alt="" />
              <span className='text-[14px]'>Русский</span>
            </div>
          </div>
      </div>
      <div className="md:flex w-full  items-center py-2 px-2 max-w-[1240px] m-auto">
          
            <NavLink to={'/'}>
               <img src="/img/uzumLogoPC.svg" alt="" />              
            </NavLink>

          <div className="bg-[#EBEBFAFF] h-[45px] ml-[30px]  rounded-[4px] flex items-center justify-center">
              <img className='w-[30px] ml-[20px]' src="/img/catalogIcon.svg" alt="" />
              <p className="text-[#3333CC] ml-[10px] mr-[25px] text-[14px]">Каталог</p>
          </div>

          <form className="flex items-center h-[45px] ml-[20px] border-[1px] border-[rgba(118, 121, 127, 0.3)] rounded-[4px] px-2">

              <input type="text" className=" w-[450px] h-[30px] text-[#757575]" placeholder="Искать товары и категории" />
              <img className="w-[20px]" src="/img/searchImg.svg" alt="" />

          </form>

          <div className=" h-[45px] w-[120px] ml-[30px] rounded-[4px] flex items-center justify-center">
              <img src="/img/user.svg" className="w-[20px] h-[20px]" alt="" />
              <p className="text-[#000] ml-[10px] hidden xl:block">Войти</p>
          </div>
            <NavLink to={'/favorite'}>
                <div className=" h-[45px] w-[120px] lg:ml-[30px] rounded-[4px] flex items-center justify-center">
                    <img src="/img/liked.svg" className="w-[20px] h-[20px]" alt="" />
                    <p className="text-[#000] ml-[10px] hidden xl:block">Избранное</p>
                </div>              
            </NavLink>

              <NavLink to={'/basket'}>
                <div className=" h-[45px] w-[120px] lg:ml-[30px] rounded-[4px] flex items-center justify-center">
                    <img src="/img/saved.svg" className="w-[20px] h-[20px]" alt="" />
                    <p className="text-[#000] ml-[10px] hidden xl:block">Корзина</p>
                </div>                
              </NavLink>


        </div>

        <div className='flex justify-between w-full items-center h-[32px]'>
          <p className='text-[14px] text-[#000000b3]'>Электроника</p>
          <p className='text-[14px] text-[#000000b3]'>Бытовая техника</p>
          <p className='text-[14px] text-[#000000b3]'>Одежда</p>
          <p className='text-[14px] text-[#000000b3]'>Обувь</p>
          <p className='text-[14px] text-[#000000b3]'>Аксессуары</p>
          <p className='text-[14px] text-[#000000b3]'>Красота</p>
          <p className='text-[14px] text-[#000000b3]'>Здоровье</p>
          <p className='text-[14px] text-[#000000b3]'>Товары для дома</p>
          <p className='text-[14px] text-[#000000b3]'>Строительство и ремонт</p>
          <p className='text-[14px] text-[#000000b3]'>Автотовары</p>
          <p className='text-[14px] text-[#000000b3]'>Детские товары</p>
          <div className='flex'>
            <span>Ещё</span>
            <SlArrowDown size={10}  className='text-[#000000] ml-[3px] mt-[7px]'/>
          </div>
        </div>
    </div>      

    </>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
