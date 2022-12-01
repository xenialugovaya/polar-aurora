import { Box, styled, Tab, Tabs } from "@mui/material"
import Link from "next/link";

import { MenuItem } from "../../types";

interface MenuProps {
    currentPageSlug: string;
    menu: MenuItem[];
}

const MenuTab = styled((props: any) => <Tab {...props} />)(
    ({ theme }) => ({
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
    }),
);

export const Menu: React.FC<MenuProps> = ({ currentPageSlug, menu }) => {
    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper', padding: '0px 20px 20px 20px' }}>
            <Tabs
                value={currentPageSlug}
                variant="scrollable"
                scrollButtons="auto"
            >
                {menu.map((item) => (
                    <Link href={item.slug}>
                        <MenuTab value={item.slug} label={item.name} sx={{ color: '#94A3B8', opacity: 1 }} />
                    </Link>
                ))}
            </Tabs>
        </Box>
    )
}