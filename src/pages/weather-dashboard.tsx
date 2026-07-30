import CurrentWeather from '@/components/current-weather';
import HourlyTemperature from '@/components/hourly-temperature';
import WeatherSkeleton from '@/components/loading-skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { useGeolocation } from '@/hooks/use-geolocation';
import { useForercastQuery, useReverseGeocodeQuery, useWeatherQuery } from '@/hooks/use-weather';
import { AlertCircleIcon, MapPin, RefreshCw } from 'lucide-react';

const WeatherDashboard = () => {
  const { coordinates, error: locationError, getLocation, isLoading: locationLoading } = useGeolocation();

const weatherQuery = useWeatherQuery(coordinates);
const forecastQuery = useForercastQuery(coordinates);
const locationQuery = useReverseGeocodeQuery(coordinates);

const handleRefresh = () => {
    getLocation();
    if (coordinates) {
      weatherQuery.refetch();
      forecastQuery.refetch();
      locationQuery.refetch();
    }
  };


  if (locationLoading) {
    return <WeatherSkeleton />;
  }


  if (locationError) {
    return (
      <Alert variant="destructive">
      <AlertCircleIcon className="size-4" />
      <AlertTitle>Location Error</AlertTitle>
      <AlertDescription className="flex flex-col">
        <p> {locationError} </p>
        <Button onClick={getLocation} variant={"outline"} className="w-fit mb-2" >
          <MapPin className="mr-2 size-4" />
          Enable Location
        </Button>
      </AlertDescription>
    </Alert>
    )
  }

  if (!coordinates) {
    return (
      <Alert variant="destructive">
      <AlertTitle>Location Required</AlertTitle>
      <AlertDescription className="flex flex-col">
        <p> Please enable location access to see your local weather. </p>
        <Button onClick={getLocation} variant={"outline"} className="w-fit mb-2" >
          <MapPin className="mr-2 size-4" />
          Enable Location
        </Button>
      </AlertDescription>
    </Alert>
    )
  }
  
  const locationName = locationQuery.data?.[0];
   if (weatherQuery.error || forecastQuery.error){
     return(
        <Alert variant="destructive">
        <AlertCircleIcon className="size-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription className="flex flex-col">
          <p> Failed to fetch weather data. Please try again. </p>
          <Button onClick={handleRefresh} variant={"outline"} className="w-fit mb-2" >
            <RefreshCw className="mr-2 size-4" />
            Refresh Data
          </Button>
        </AlertDescription>
      </Alert>
     )
   }

   if(!weatherQuery.data || !forecastQuery.data){
    return <WeatherSkeleton />;
   }


    return (
      <div className="space-y-4">
        {/* favourite cities */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">My Location</h1>
          <Button
            variant="outline"
            size="icon"
            aria-label="Refresh"
            onClick={handleRefresh}
            disabled={weatherQuery.isFetching || forecastQuery.isFetching}
          >
            <RefreshCw className={`"size-4" ${weatherQuery.isFetching ? "animate-spin" : ""}`} />
          </Button>
        </div>


        <div className="grid gap-6">
          <div className='flex flex-col lg:flex-row gap-4'>
            <CurrentWeather 
              data={weatherQuery.data}
              locationName={locationName}
              />


            <HourlyTemperature data={forecastQuery.data}  

            />

              {/* hourly temperaturer */}
              
          </div>

          <div>
            {/* details */}
            {/* forecast */}
          </div>
        </div>
      </div>
    );
  }

export default WeatherDashboard