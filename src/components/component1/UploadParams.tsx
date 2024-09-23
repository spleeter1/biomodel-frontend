import { Typography, Box, TextField } from '@mui/material';
import UploadButton from './UploadButton';
import { useDispatch } from 'react-redux';
import { ChangeEvent } from 'react';
import { updateValue } from '../../redux/stringParamSlice';

type UploadParamsProps = {
    uploadTitle: string;
};

const UploadParams: React.FC<UploadParamsProps> = ({ uploadTitle }) => {
    const dispatch = useDispatch();

    const handleStringParam =
        (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(updateValue({ key, value: e.target.value }));
        };

    return (
        <div style={{ paddingBottom: '20px' }}>
            <div
                style={{
                    borderLeft: '4px solid #e8ecee',
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                }}
            >
                <Typography
                    sx={{
                        background: '#e8ecee',
                        fontWeight: 'bold',
                        borderTopRightRadius: 5,
                        padding: '5px',
                        paddingLeft: '3%',
                        color: '#505398',
                    }}
                >
                    {uploadTitle}
                </Typography>

                <Box
                    sx={{
                        paddingLeft: '2%',
                        display: 'flex',
                        flexDirection: 'row',
                        paddingTop: '3%',
                    }}
                >
                    <UploadButton />
                </Box>

                <Typography
                    sx={{
                        paddingBottom: '2%',
                        paddingLeft: '3%',
                        paddingTop: '10px',
                    }}
                >
                    <strong>
                        To prepare the example dataset, the following files are
                        required:
                    </strong>
                </Typography>

                <div style={{ paddingLeft: '3%' }}>
                    <ul>
                        <li>
                            <strong>
                                VCF file from the 1000 Genomes Project
                            </strong>
                            <em>File</em>:{' '}
                            <code>
                                ALL.chr22.phase3_shapeit2_mvncall_integrated_v5b.20130502.genotypes.vcf.gz
                            </code>
                            <br />
                            <em>Download link</em>:{' '}
                            <a
                                href="https://ftp.1000genomes.ebi.ac.uk/vol1/ftp/release/20130502"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                1000 Genomes Project Phase 3 (Chromosome 22)
                            </a>
                            <br />
                            <em>Place the file in the</em>:{' '}
                            <code>org_data</code> <em>directory.</em>
                        </li>
                        <li>
                            <strong>
                                Manifest file for the Infinium Omni2.5-8
                                BeadChip
                            </strong>
                            :
                            <br />
                            <em>File</em>:{' '}
                            <code>InfiniumOmni2-5-8v1-4_A1.csv</code>
                            <br />
                            <em>Download link</em>:{' '}
                            <a
                                href="https://support.illumina.com/array/array_kits/humanomni2_5-8_beadchip_kit/downloads.html"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Infinium Omni2-5-8v1-4 A1 Manifest File
                            </a>
                            <br />
                            <em>Instructions</em>: Download{' '}
                            <code>
                                infinium-omni-2-5-8v1-4-a1-manifest-file-csv.zip
                            </code>
                            , unzip the file, and place{' '}
                            <code>InfiniumOmni2-5-8v1-4_A1.csv</code> in the{' '}
                            <code>org_data</code> directory.
                        </li>
                        <li>
                            <strong>Hg19 fasta file</strong>:
                            <br />
                            <em>File</em>: <code>hg19.fa</code>
                            <br />
                            <em>Download link</em>:{' '}
                            <a
                                href="https://hgdownload.soe.ucsc.edu/goldenPath/hg19/bigZips/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Hg19 Fasta File
                            </a>
                            <br />
                            <em>Instructions</em>: Download{' '}
                            <code>hg19.fa.gz</code>, unzip the file, and place{' '}
                            <code>hg19.fa</code> in the <code>org_data</code>{' '}
                            directory.
                        </li>
                    </ul>
                </div>

                <Box sx={{ paddingLeft: '3%' }}>
                    <TextField
                        id="input-region"
                        label="Region"
                        onChange={handleStringParam('region')}
                    />
                </Box>
            </div>
        </div>
    );
};

export default UploadParams;
