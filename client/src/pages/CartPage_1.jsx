import ServiceImage from "../components/cart_components/ServiceImage";
import MuiBreadcrumbs from "../components/cart_components/MuiBreadcrumbs";
import Navbar from "../components/Navbar";
import FirstStep from "../components/cart_components/stepper/FirstStep";
import ServiceList from "../components/cart_components/forms/ServiceList";
import OrderSummary from "../components/cart_components/OrderSummary";
import BottomNavigator from "../components/cart_components/BottomNavigator";

function CartPage_1() {
  return (
    <div className="background bg-[#F3F4F6] min-w-screen min-h-screen p-0 m-0 box-border relative flex flex-col">
      <Navbar />
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
