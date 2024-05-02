import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const CreateBook = () => {
  return (
    <section>
      <div className="flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard/home">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard/books">Book</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>Create</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex items-center gap-3">
            <Button variant={"outline"}>
              {/* <CirclePlus size={20} /> */}
              <span className="ml-2">cancel</span>
            </Button>
            <Button>
              {/* <CirclePlus size={20} /> */}
              <span className="ml-2">Submit</span>
            </Button>
        </div>
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Create a new book</CardTitle>
          <CardDescription>
            Fill out the form below to create new book
          </CardDescription>
        </CardHeader>
        <CardContent>
            <form>
            <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full"
                          defaultValue="Happy habits"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="=genre">Genre</Label>
                        <Input
                          id="genre"
                          type="text"
                          className="w-full"
                          defaultValue="Sci-Fi"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">Description</Label>
                        <Textarea 
                          id="description"
                          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                          className="min-h-32"
                        />
                      </div>
                    </div>
            </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default CreateBook;
