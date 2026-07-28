import { Button } from '@/components/ui/button';
import { useGeolocation } from '@/hooks/use-geolocation';
import { RefreshCw } from 'lucide-react';

const WeatherDashboard = () => {
const { coordinates, error, getLocation, isLoading } = useGeolocation();

console.log('Coordinates:', coordinates);

  return(
  <div className="space-y-4">
    {/* favourite cities */} 
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-bold tracking-tight">My Location</h1>
      <Button
        variant={"outline"}
        size={"icon"}
        aria-label="Refresh"
        //onClick={handleRefresh}
        //disabled={isLoading}
      >
        <RefreshCw  className="size-4" />
        
      </Button>
    </div>

    {/* {/* current and Hourly Weather} */}
  </div>
  );
}

export default WeatherDashboard