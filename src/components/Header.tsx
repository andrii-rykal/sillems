// 'use client'

import { Box } from '@mui/material';
import Link from 'next/link';
// import { useEffect, useState } from 'react';

const Header = () => {
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // if (!isMounted) {
  //   return <div style={{ height: "40px", background: "#f3f3f3" }} />;
  // }

  return (
    <Box
      sx={{ display: 'flex', gap: 2, justifyContent: 'center', fontSize: 24 }}
    >
      <Link href="/">Home</Link>
      <Link href="/company">Company</Link>
      <Link href="/products">Products</Link>
    </Box>
  );
};

export default Header;
