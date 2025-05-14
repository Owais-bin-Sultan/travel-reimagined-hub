
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from 'date-fns';
import { CalendarIcon, MapPin } from 'lucide-react';

const SearchBar = () => {
  const [destination, setDestination] = useState<string>('');
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [rooms, setRooms] = useState<number>(1);

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-[14px] h-4 w-4 text-gray-500" />
          <Input
            placeholder="Where are you going?"
            className="pl-10"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dateRange.from ? (
                  dateRange.to ? (
                    <>
                      {format(dateRange.from, "LLL dd")} - {format(dateRange.to, "LLL dd")}
                    </>
                  ) : (
                    format(dateRange.from, "LLL dd")
                  )
                ) : (
                  <span>Check-in - Check-out</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={dateRange.from}
                selected={dateRange}
                onSelect={setDateRange}
                numberOfMonths={2}
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <span>{adults} adults · {children} children · {rooms} room</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[240px] p-4 pointer-events-auto" align="center">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Adults</span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                    >-</Button>
                    <span>{adults}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => setAdults(adults + 1)}
                    >+</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Children</span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => setChildren(Math.max(0, children - 1))}
                    >-</Button>
                    <span>{children}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => setChildren(children + 1)}
                    >+</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Rooms</span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => setRooms(Math.max(1, rooms - 1))}
                    >-</Button>
                    <span>{rooms}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => setRooms(rooms + 1)}
                    >+</Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <Button className="bg-secondary hover:bg-secondary/90 text-white">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
