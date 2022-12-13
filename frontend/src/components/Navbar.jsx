import {
    Box,
    Flex,
    Avatar,
    HStack,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useColorModeValue,
    useColorMode,
    Tooltip,
    Heading,
  } from "@chakra-ui/react";
  import { MoonIcon, SunIcon } from "@chakra-ui/icons";
  import { Link as BrowseLink, useNavigate } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/Authreducer/action";
  
  
  export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const {user,isAuth}=useSelector((store)=>store.authreducer)
  console.log(user,isAuth,'nav')
    const handleLogout = () => {
      dispatch(logout());
      navigate("/");
    };
  
    return (
      <div style={{position:"sticky",top:"0" , zIndex:"11" }}>
        <Box bg={useColorModeValue("blue.100", "gray.900")} px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <HStack spacing={8} alignItems={"center"} w="100%">
              <Heading textAlign={"center"} w={"100%"} pl="80px">
                <BrowseLink to={"/"}>Reading Adda</BrowseLink>
              </Heading>
            </HStack>
            <Flex alignItems={"center"} gap={{ sm: "10px", lg: "30px" }}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      isAuth === false ? "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" : user?.avatar
                    
                }
                  />
                </MenuButton>
                {isAuth === false ? (
                  <MenuList>
                    <MenuItem>
                      <BrowseLink width="100%" to={"/signup"}>Sign Up</BrowseLink>
                    </MenuItem>
                    <MenuItem>
                      <BrowseLink width="100%" to={"/login"}>Log In</BrowseLink>
                    </MenuItem>
                  </MenuList>
                ) : (
                  <MenuList>
                     <MenuItem >{user?.name}</MenuItem>
                    <MenuItem onClick={() => navigate('/myprofile')}>My Profile</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </MenuList>
                )}
              </Menu>
              <Tooltip label="Color Mode" hasArrow placement="bottom">
                <Button onClick={toggleColorMode} fontSize="2xl" bg="none">
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Tooltip>
            </Flex>
          </Flex>
        </Box>
      </div>
    );
  }
  