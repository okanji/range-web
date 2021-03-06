import React, { useState } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import {
  Menu as MuiMenu,
  MenuItem as MuiMenuItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { RANGE_USE_PLAN } from '../../../constants/routes'
import { PrimaryButton } from '../../common'
import VersionToolbar from './VersionToolbar'

const VersionsToolbar = ({
  versions,
  selectedVersion,
  onSelectVersion,
  planId
}) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClose = () => setAnchorEl(null)
  const handleOpen = event => setAnchorEl(event.currentTarget)

  const versionOptions = versions.map(v => ({
    key: v.version,
    value: v,
    text: `v${v.version}`,
    content: (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '40px repeat(2, auto)',
          gridTemplateRows: '1fr'
        }}>
        <span>v{v.version}</span>
        <span>{v.status.name}</span>
        <span>{moment(v.createdAt).format('MMM DD, YYYY, h:mm:ss a')}</span>
      </div>
    ),
    version: v
  }))

  return (
    <>
      <Menu attached="top">
        <Menu.Item>
          <PrimaryButton as={Link} to={`${RANGE_USE_PLAN}/${planId}`}>
            <Icon name="arrow left" />
            Back to RUP
          </PrimaryButton>
        </Menu.Item>

        <Menu.Item onClick={handleOpen}>
          {selectedVersion ? `v${selectedVersion.version}` : 'Select a version'}{' '}
          <Icon name="caret down" />
        </Menu.Item>

        <MuiMenu
          placeholder="Select a version"
          onClose={handleClose}
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}>
          {versionOptions.map(option => (
            <MuiMenuItem
              key={option.key}
              selected={selectedVersion === option.value}
              onClick={e => {
                onSelectVersion(e, { value: option.value })
                handleClose()
              }}>
              <ListItemAvatar>
                <Avatar>v{option.version.version}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={moment(option.version.createdAt).format(
                  'MMM DD, YYYY, h:mm:ss a'
                )}
                secondary={option.version.status?.name}
              />
            </MuiMenuItem>
          ))}
        </MuiMenu>

        {selectedVersion && (
          <VersionToolbar planId={planId} version={selectedVersion.version} />
        )}
      </Menu>
    </>
  )
}

export default VersionsToolbar
