import { ILayoutProps } from "@/components/layout";
import { CMSDOMAIN } from "@/utils";
import axios from "axios";
import { isEmpty } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

const getLayoutData = (req: NextApiRequest, res: NextApiResponse<ILayoutProps>) => {
    axios.get(`${CMSDOMAIN}/api/layouts`).then((result) => {
        const {
            copy_right,
            link_lists,
            public_number,
            qr_code,
            qr_code_image,
            site_number,
            title,
        } = result.data || {};

        console.log(link_lists)
        res.status(200).json({
            navbarData: {},
            footerData: {
                title,
                linkList: link_lists?.data?.map((item: any) => {
                    return {
                        title: item.title,
                        list: item?.links?.data?.map((_item: any) => {
                            return {
                                label: _item.label,
                                link: isEmpty(_item.link) ? "" : _item.link,
                            };
                        }),
                    };
                }),
                qrCode: {
                    image: `${CMSDOMAIN}${qr_code_image.data[0].url}`,
                    text: qr_code,
                },
                copyRight: copy_right,
                siteNumber: site_number,
                publicNumber: public_number,
            },
        })
    })
}


export default getLayoutData