import { Box } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const Header = () => {
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
