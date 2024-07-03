import React from 'react';
import { Button, Popover, QRCode as AntQRCode } from 'antd';
import { QrcodeOutlined } from '@ant-design/icons';

function CustomQRCode({ url }) {
  return (
    <Popover
      overlayInnerStyle={{ padding: 0 }}
      content={<AntQRCode value={url} bordered={true} />}
    >
      <Button type="primary" icon={<QrcodeOutlined />} size='large' />
    </Popover>
  );
}

export default CustomQRCode;
