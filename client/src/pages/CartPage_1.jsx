import ServiceImage from "../components/cart_components/ServiceImage";
import MuiBreadcrumbs from "../components/cart_components/MuiBreadcrumbs";
import Navbar_user from "../components/Navbar_user";
import FirstStep from "../components/cart_components/stepper/FirstStep";
import ServiceList from "../components/cart_components/forms/ServiceList";
import OrderSummary from "../components/cart_components/OrderSummary";
import BottomNavigator from "../components/cart_components/BottomNavigator";

function CartPage_1() {
  return (
    <div className="background bg-[#F3F4F6] max-w-screen min-h-[1135px] p-0 m-0 relative">
      <Navbar_user />
      <ServiceImage />
      <MuiBreadcrumbs />
      <FirstStep />
      <ServiceList />
      <OrderSummary />
      <BottomNavigator />
    </div>
  );
}

export default CartPage_1;
