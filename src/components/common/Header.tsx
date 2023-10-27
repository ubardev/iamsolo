'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineYoutube } from 'react-icons/ai';
import { BsBroadcastPin } from 'react-icons/bs';
import { LuInstagram } from 'react-icons/lu';
import { OTT_LIST } from '@/constants/common';
import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleBroadcastClick = (type: OTT_LIST) => {
    let ottLink = '';

    switch (type) {
      case OTT_LIST.netflix:
        ottLink = 'https://www.netflix.com/title/81551819';
        break;
      case OTT_LIST.coupangplay:
        ottLink =
          'https://www.coupangplay.com/content/aafafdbe-67d6-4335-a456-0997f00364f9';
        break;
      case OTT_LIST.tving:
        ottLink = 'https://www.tving.com/contents/P001492081';
        break;
    }

    if (!ottLink) {
      return;
    }

    window.open(ottLink);
  };

  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/">
        <h1 className="flex items-center text-3xl font-bold">
          <Image src="/images/logo.png" alt="logo" width={50} height={50} />
          <div className="ml-4 text-lg">나는 솔로 모든 것</div>
        </h1>
      </Link>
      <nav className="flex gap-4">
        <Link
          href="https://www.instagram.com/im_solo_official/"
          target="_blank"
        >
          <LuInstagram size={24} />
        </Link>
        <Link href="https://www.youtube.com/@chonjang" target="_blank">
          <AiOutlineYoutube size={24} />
        </Link>
        <div>
          <IconButton
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            size="small"
            style={{
              color: 'black',
              margin: 0,
              padding: 0,
            }}
          >
            <BsBroadcastPin size={24} />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={() => handleBroadcastClick(OTT_LIST.netflix)}>
              NETFLIX
            </MenuItem>
            <MenuItem
              onClick={() => handleBroadcastClick(OTT_LIST.coupangplay)}
            >
              coupang play
            </MenuItem>
            <MenuItem onClick={() => handleBroadcastClick(OTT_LIST.tving)}>
              TVING
            </MenuItem>
          </Menu>
        </div>
      </nav>
    </header>
  );
}
