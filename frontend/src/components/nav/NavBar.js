import { Navbar, Dropdown, Avatar } from "flowbite-react";
import Logo from "../../assets/icons/watermelon.png";
import { useSelector } from "react-redux";
export default function NavBar({ links }) {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  return (
    <Navbar fluid={true} rounded={true} className="!bg-red-200">
      <Navbar.Brand>
        <img className="animate-bounce h-8 w-auto sm:h-8" src={Logo} alt="" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        {user && (
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                rounded={true}
                status="online"
                statusPosition="top-right"
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                {user.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {links.map((item) => (
          <Navbar.Link key={item} className="hover:!text-white" href="/navbars">
            {item}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
