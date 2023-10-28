'use client';

import { useState } from 'react';
import { BsBroadcastPin } from 'react-icons/bs';
import { OTT_LIST } from '@/constants/common';
import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function OttList() {
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
        <MenuItem onClick={() => handleBroadcastClick(OTT_LIST.coupangplay)}>
          coupang play
        </MenuItem>
        <MenuItem onClick={() => handleBroadcastClick(OTT_LIST.tving)}>
          TVING
        </MenuItem>
      </Menu>
    </div>
  );
}
