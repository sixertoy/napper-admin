import { shape, string } from 'prop-types';

const ManifestType = shape({
  copyright: string.isRequired,
  description: string.isRequired,
  name: string.isRequired,
  version: string.isRequired,
});

export default ManifestType;
